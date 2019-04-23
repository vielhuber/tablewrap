# 🐨 tablewrap 🐨

tablewrap is a small javascript helper that wraps your html tables on small viewports column-wise.

## features

-   no need for modification of existing css styles
-   no extra markup needed
-   performant and lightweight
-   comes as an es6 module
-   cross-browser-support (also ie11)
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
