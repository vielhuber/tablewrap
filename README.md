[![build status](https://github.com/vielhuber/tablewrap/actions/workflows/ci.yml/badge.svg)](https://github.com/vielhuber/tablewrap/actions)
[![GitHub Tag](https://img.shields.io/github/v/tag/vielhuber/tablewrap)](https://github.com/vielhuber/tablewrap/tags)
[![Code Style](https://img.shields.io/badge/code_style-eslint-4B32C3.svg)](https://eslint.org/)
[![License](https://img.shields.io/npm/l/tablewrap)](https://www.npmjs.com/package/tablewrap)
[![Last Commit](https://img.shields.io/github/last-commit/vielhuber/tablewrap)](https://github.com/vielhuber/tablewrap/commits)
[![npm Version](https://img.shields.io/npm/v/tablewrap)](https://www.npmjs.com/package/tablewrap)
[![npm Downloads](https://img.shields.io/npm/dt/tablewrap)](https://www.npmjs.com/package/tablewrap)

# 🖇 tablewrap 🖇

tablewrap is a small javascript helper that wraps your html tables on small viewports column-wise.

![demo](https://raw.githubusercontent.com/vielhuber/tablewrap/main/tablewrap.gif)

## features

-   no modification of existing css styles needed
-   no extra markup needed
-   performant and lightweight
-   comes as an es6 module
-   cross-browser-support
-   support for preserving the first column

## installation

```bash
npm install tablewrap
```

## usage

```js
import Tablewrap from 'tablewrap';

document.addEventListener('DOMContentLoaded', () => {
    let tablewrap = new Tablewrap({
        selector: 'table',
        breakpoint: 700,
        preserveFirstCol: true
    });

    tablewrap.destroy();
});
```
