# Booked4Seasons frontend deployment

- Repository: `https://github.com/appolon1908-hue/booked4seasons`
- Branch: `main`
- Server: `49.12.145.107`
- Root: `/opt/booked4seasons`
- Compose: `/opt/booked4seasons/docker/docker-compose.frontend.yml`
- Container/network: `booked4seasons-frontend`
- Internal app port: `3000` (not published to the host)
- Reverse proxy: shared Docker Caddy
- Domain: `https://booked4seasons.com`
- Deploy: `/opt/booked4seasons/docker/deploy-frontend.sh`
- Logs: `docker logs --tail=200 booked4seasons-frontend`
- Restart: `docker compose --env-file .env.frontend -f docker-compose.frontend.yml restart booked4seasons-frontend`
- Rollback: `/opt/booked4seasons/docker/rollback-frontend.sh`
- State: `/opt/booked4seasons/state/current-sha` and `last-known-good-sha`
