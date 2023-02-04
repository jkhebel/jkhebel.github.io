# Portfolio

This repo house the code for my personal web portfolio housed at [jaihebel.com](jaihebel.com). This site is a constant work in progress, as I continue to learn new design and development tools. The site is currently using Sass for dynamic CSS.

The current deployment method uses [Github Pages](https://pages.github.com/), which hosts the content of the `gh-pages` deployment branch. To push the contents of the *distribution* folder to the deployment branch, use the `git subtree` command below to push a target folder to a separate branch:

```
git subtree push --prefix dist origin gh-pages
```

## Future development

- [ ] Upgrade to React components
- [ ] Add project pages
- [ ] Add social favicons
- [ ] Add color/theme switching
