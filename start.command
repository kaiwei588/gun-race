#!/bin/bash
cd "$(dirname "$0")"

PORT=8099
while lsof -iTCP:"$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; do
  PORT=$((PORT + 1))
done

echo "================================"
echo "  火线突围 · 本地服务器"
echo "  游戏: http://localhost:$PORT/shooter.html"
echo "  选单: http://localhost:$PORT/"
echo "  按 Ctrl+C 停止服务器"
echo "================================"

open "http://localhost:$PORT/shooter.html"
python3 -m http.server "$PORT"
