#!/usr/bin/env bash
#
# start-server.sh — serve this folder over http:// so the presentation works
# without CORS errors (opening the HTML via file:// blocks Babel from loading
# the .jsx files).
#
# Usage:
#   ./start-server.sh          # serves on port 8000
#   ./start-server.sh 5500     # serves on a custom port
#
# Stop with Ctrl+C.

set -euo pipefail

# Always serve the directory this script lives in, no matter where it's run from.
cd "$(dirname "$0")"

PORT="${1:-8000}"

# If the chosen port is already in use, bail out with a helpful message.
if command -v ss >/dev/null 2>&1 && ss -ltn "( sport = :$PORT )" 2>/dev/null | grep -q ":$PORT"; then
  echo "Port $PORT is already in use."
  echo "Either stop whatever is using it, or run: ./start-server.sh <other-port>"
  exit 1
fi

URL="http://localhost:$PORT/index-source.html"

echo "Serving $(pwd)"
echo "Open: $URL"
echo "      http://localhost:$PORT/Vibe%20Coding%20Animation.html"
echo "Press Ctrl+C to stop."
echo

# Try to open the browser automatically (ignore failure on headless setups).
if command -v xdg-open >/dev/null 2>&1; then
  ( sleep 1; xdg-open "$URL" >/dev/null 2>&1 || true ) &
fi

# Prefer python3; fall back to `npx serve` if python isn't available.
if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
elif command -v npx >/dev/null 2>&1; then
  exec npx serve -l "$PORT"
else
  echo "Neither python3 nor npx found. Install one of them to serve the folder." >&2
  exit 1
fi
