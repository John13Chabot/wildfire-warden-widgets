# wildfire-warden-widgets

Hosted embed scripts for [wildfirewarden.com](https://wildfirewarden.com), served through jsDelivr.

## wwh3d.js — 3D home vulnerability map

Paste into a Webflow Code Embed:

```html
<section id="wwh3"></section>
<script type="module" src="https://cdn.jsdelivr.net/gh/John13Chabot/wildfire-warden-widgets@v3.4.2/wwh3d.js"></script>
```

Updating: edit `wwh3d.js`, create a new release tag (e.g. `v3.2.1`), then change the version in the Webflow embed to the new tag and republish. Pinned tags never go stale in jsDelivr's cache.

## Source

`src/` holds the readable source; `wwh3d.js` is built with esbuild (three.js r160 bundled, MIT):

```sh
npm install && npm run build
```
