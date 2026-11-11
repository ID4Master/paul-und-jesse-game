#!/bin/sh
# Baut legacy/game.js: das ganze Spiel in einer Datei, umgewandelt für alte Browser (Chrome 64 auf dem Smartboard).
# Nach Änderungen am Spiel ausführen und legacy/game.js mit committen:  sh tools/build-legacy.sh
cd "$(dirname "$0")/.." && npx --yes esbuild@0.28.2 src/main.js --bundle --format=iife --target=chrome64 --minify --legal-comments=none --outfile=legacy/game.js
