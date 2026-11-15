#!/bin/sh
npx esbuild src/main.js --bundle --format=esm --minify --target=es2020 --loader:.css=text --loader:.html=text --legal-comments=none \
 --banner:js="/* Wildfire Warden 3D Home Vulnerability Map v3.6.0 | three.js r160 (MIT) bundled | https://github.com/John13Chabot/wildfire-warden-widgets */" \
 --outfile=dist/wwh3d.js
