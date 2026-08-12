# Booked4Seasons frontend rollback

Run `/opt/booked4seasons/docker/rollback-frontend.sh`. It validates the recorded last-known-good commit, checks out that exact frontend revision, rebuilds only the Booked4Seasons frontend image, starts only its container, waits for health, and updates `current-sha`. It does not modify the shared proxy or unrelated containers. If no prior healthy deployment exists, rollback is unavailable and the current first-deploy image must be retained.
