<div align="center">

# Tea Notes

**English** · [Русский](README.ru.md)

### A slower cup. A better ritual.

Brewing methods · Tea profiles · Tasting and teaware

![VuePress](https://img.shields.io/badge/VuePress-1-9ece6a?style=flat-square)
![Markdown](https://img.shields.io/badge/content-Markdown-7aa2f7?style=flat-square)
[![Website](https://img.shields.io/badge/read-GitHub_Pages-bb9af7?style=flat-square)](https://igorkramar.github.io/tea/)

[Read online](https://igorkramar.github.io/tea/) · [Explore](#explore) · [Run locally](#run-locally) · [Publishing](#publishing)

[![MIT](https://img.shields.io/badge/license-MIT-9ece6a?style=flat-square)](../LICENSE)

</div>

A personal Russian-language tea handbook: how to brew, what to taste, which vessel to choose and how to store your tea. Read the published site or browse the Markdown sources directly.

**Content language: Russian.** This English entry point covers navigation, setup and publishing. The handbook is a collection of personal notes, not a clinical guide or a promise of particular health effects.

## Explore

| Shelf | Contents |
|:---|:---|
| **Start brewing** | [Basics](../common/brewing_basics.md) · [Brewing methods](../common/brewing_methods.md) |
| **Oolong** | [GABA Alishan](../teas/gaba_alishan.md) · [Da Hong Pao](../teas/da_hong_pao.md) |
| **Pu-erh** | [Shu](../teas/shu_puer.md) · [Sheng](../teas/sheng_puer.md) · [Jing Mai Gu Shu](../teas/jing_mai_gu_shu.md) |
| **More tea profiles** | [Dian Hong](../teas/dian_hong_jin_si.md) · [Bai Mu Dan](../teas/bai_mu_dan.md) · [Anhua Fu](../teas/anhua_fu_golden_flower.md) |
| **Your tea corner** | [Storage](../tips/storage.md) · [Teaware](../tips/teaware.md) · [Tasting](../tips/tasting.md) |
| **Quick references** | [Brewing diagrams](../schemes/brewing_diagrams.md) · [Checklists](../schemes/checklists.md) · [Troubleshooting](../tips/troubleshooting.md) |

The [site homepage](../README.md) also has seasonal notes and food pairings. Its VuePress frontmatter is part of the website, so the GitHub project overview lives separately in `.github/`.

## Run locally

The existing workflow builds with Node.js 18 and VuePress 1. Use the lockfile to reproduce dependencies; a toolchain upgrade is separate from this documentation update.

```sh
git clone https://github.com/IgorKramar/tea.git
cd tea
npm ci
npm run docs:dev
```

Open `http://localhost:8080/tea/`. Build the static site with:

```sh
npm run docs:build
```

The output directory is `.vuepress/dist/`. The base path `/tea/` is configured in [`.vuepress/config.js`](../.vuepress/config.js).

## Publishing

The [deployment workflow](workflows/deploy.yml) runs on pushes to `main` or manual dispatch. It builds the site, uploads a Pages artifact and deploys it using GitHub Actions. Set **Settings → Pages → Source → GitHub Actions**. See [deployment notes (RU)](../DEPLOY.md).

## Contribute

Improve a tea profile, clarify a brewing step or fix a link. Keep subjective tasting notes distinct from factual claims, preserve the existing Russian handbook and preview your Markdown locally before submitting a change.

## License

[MIT](../LICENSE) · Copyright © 2026 Igor Kramar. Third-party materials and linked resources retain their respective licenses and rights.