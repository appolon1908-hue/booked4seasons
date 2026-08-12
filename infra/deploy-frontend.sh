#!/usr/bin/env bash
set -euo pipefail
ROOT="/opt/booked4seasons"; APP="$ROOT/app"; DOCKER="$ROOT/docker"; STATE="$ROOT/state"
cd "$APP"
git fetch origin main
git checkout main
git pull --ff-only origin main
test -z "$(git status --porcelain)"
NEW_SHA="$(git rev-parse HEAD)"
if [ -f "$STATE/current-sha" ]; then cp "$STATE/current-sha" "$STATE/last-known-good-sha"; fi
cd "$DOCKER"
export BOOKED4SEASONS_IMAGE_TAG="production-${NEW_SHA:0:12}"
docker compose --env-file .env.frontend -f docker-compose.frontend.yml config >/dev/null
docker compose --env-file .env.frontend -f docker-compose.frontend.yml build --pull
docker compose --env-file .env.frontend -f docker-compose.frontend.yml up -d
for i in $(seq 1 36); do
  STATUS="$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' booked4seasons-frontend 2>/dev/null || true)"
  if [ "$STATUS" = "healthy" ]; then echo "$NEW_SHA" > "$STATE/current-sha"; echo "$BOOKED4SEASONS_IMAGE_TAG" > "$STATE/current-image-tag"; echo "DEPLOY_SHA=$NEW_SHA"; echo "IMAGE_TAG=$BOOKED4SEASONS_IMAGE_TAG"; echo "FRONTEND_HEALTH=PASS"; exit 0; fi
  sleep 5
done
docker logs --tail=200 booked4seasons-frontend
echo "FRONTEND_HEALTH=FAIL"
exit 1
