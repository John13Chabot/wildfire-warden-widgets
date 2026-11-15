# wildfire-warden-widgets

Hosted embed scripts for [wildfirewarden.com](https://wildfirewarden.com), served through jsDelivr.

## wwh3d.js — 3D home vulnerability map

Paste into a Webflow Code Embed:

```html
<section id="wwh3"></section>
<script type="module" src="https://cdn.jsdelivr.net/gh/John13Chabot/wildfire-warden-widgets@v3.6.0/wwh3d.js"></script>
```

Updating: edit `wwh3d.js`, create a new release tag (e.g. `v3.2.1`), then change the version in the Webflow embed to the new tag and republish. Pinned tags never go stale in jsDelivr's cache.

## Source

`src/` holds the readable source; `wwh3d.js` is built with esbuild (three.js r160 bundled, MIT):

```sh
npm install && npm run build
```


## Services page (scroll-linked)
Same bundle. Use a `#wwh3s` section instead of `#wwh3`:

```html
<div style="max-width:1680px;margin:0 auto;padding:24px 16px">
  <section id="wwh3s"></section>
</div>
<script type="module" src="https://cdn.jsdelivr.net/gh/John13Chabot/wildfire-warden-widgets@v3.6.0/wwh3d.js"></script>
```
Deep links: `/services#vents`, `#eaves`, `#gutters`, `#fortify`, `#firefree-88`, `#deckguard`.


## Wildfire stress test (fire simulation)
Same bundle. Use a `#wwh3f` section:

```html
<div style="max-width:1680px;margin:0 auto;padding:24px 16px 48px">
  <section id="wwh3f"></section>
</div>
<script type="module" src="https://cdn.jsdelivr.net/gh/John13Chabot/wildfire-warden-widgets@v3.6.0/wwh3d.js"></script>
```
Rule-based, illustrative model (src/fire.js): exposures, spread edges, upgrade toggles. Not a prediction for any property.
