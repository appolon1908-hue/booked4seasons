#!/usr/bin/env bash
set -euo pipefail
ROOT="/opt/booked4seasons"; APP="$ROOT/app"; DOCKER="$ROOT/docker"; STATE="$ROOT/state"
test -s "$STATE/last-known-good-sha"
SHA="$(cat "$STATE/last-known-good-sha")"
cd "$APP"
git cat-file -e "$SHA^{commit}"
git checkout --detach "$SHA"
cd "$DOCKER"
BOOKED4SEASONS_IMAGE_TAG="rollback-${SHA:0:12}" docker compose --env-file .env.frontend -f docker-compose.frontend.yml build booked4seasons-frontend
BOOKED4SEASONS_IMAGE_TAG="rollback-${SHA:0:12}" docker compose --env-file .env.frontend -f docker-compose.frontend.yml up -d booked4seasons-frontend
for i in $(seq 1 36); do
  STATUS="$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' booked4seasons-frontend 2>/dev/null || true)"
  if [ "$STATUS" = "healthy" ]; then echo "$SHA" > "$STATE/current-sha"; echo "ROLLBACK_SHA=$SHA"; echo "FRONTEND_HEALTH=PASS"; exit 0; fi
  sleep 5
done
docker logs --tail=200 booked4seasons-frontend
exit 1
