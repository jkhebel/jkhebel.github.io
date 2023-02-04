# Portfolio

This repo house the code for my personal web portfolio housed at [jaihebel.com](http://jaihebel.com). This site is a constant work in progress, as I continue to learn new design and development tools. The site is currently using Sass for dynamic CSS.

The current deployment method uses [Github Pages](https://pages.github.com/), which hosts the content of the `gh-pages` deployment branch. To push the contents of the *distribution* folder to the deployment branch, use the `git subtree` command below to push a target folder to a separate branch:

```
git switch main
git subtree split --prefix dist --branch gh-pages
git switch gh-pages
git push
```

## Future development

- [ ] Upgrade to React components
- [ ] Add project pages
- [ ] Add social favicons
- [ ] Add color/theme switching
