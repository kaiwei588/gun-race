#!/bin/bash
cd "$(dirname "$0")"

PORT=8099
while lsof -iTCP:"$PORT" -sTCP:LISTEN -t >/dev/null 2>&1; do
  PORT=$((PORT + 1))
done

echo "================================"
echo "  火线突围 · 本地服务器"
echo "  地址: http://localhost:$PORT"
echo "  按 Ctrl+C 停止服务器"
echo "================================"

if command -v open >/dev/null 2>&1; then
  open "http://localhost:$PORT/%E6%9E%AA%E6%88%98.html"
fi

python3 -m http.server "$PORT"
