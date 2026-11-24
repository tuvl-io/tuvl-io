# tuvl.io

The company website at [tuvl.io](https://tuvl.io). It's a static page: plain HTML and CSS, with no build step.

- Try our solutions at [try.tuvl.online](https://try.tuvl.online)
- Build and host them at [cloud.tuvl.io](https://cloud.tuvl.io)
- The open-source tuvl engine is at [tuvl.org](https://tuvl.org)

## Run it locally

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open http://127.0.0.1:8080.

## Deploy

GitHub Pages serves the `main` branch as it is, so a push to `main` is a deploy.

- **Cached CSS:** browsers keep the old stylesheet, so bump the `?v=` number on the stylesheet links when you change the CSS.
- **Old links:** `/docs/...` links from the old site are redirected to `tuvl.org/docs/...` by `404.html`.

## License

Apache-2.0 (see `LICENSE`). The Geist fonts are under the SIL Open Font License (`fonts/OFL.txt`).
