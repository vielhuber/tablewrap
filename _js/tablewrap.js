export default class Tablewrap {
    args = {};
    tables = [];
    mediaQuery = null;
    mediaQueryBind = null;

    constructor(args) {
        this.args = args;
        this.buildMobileDom();
        this.addResizeListeners();
    }

    buildMobileDom() {
        if (document.querySelector(this.args.selector) === null) {
            return;
        }
        document.querySelectorAll(this.args.selector).forEach(el => {
            let cols = el.querySelector('td').parentNode.children.length;
            let mobileTables = [];
            for (let col = 1; col <= cols; col++) {
                let newDiv = el.cloneNode(true);
                let toRemove = [];
                newDiv.querySelectorAll('td').forEach(el2 => {
                    if (this.prevAll(el2).length + 1 !== col) {
                        toRemove.push(el2);
                    }
                });
                toRemove.forEach(toRemove__value => {
                    toRemove__value.remove();
                });
                mobileTables.push(newDiv);
            }
            mobileTables = mobileTables.reverse();
            this.tables.push({
                desktop: el,
                mobile: mobileTables
            });
        });
    }

    addResizeListeners() {
        this.mediaQuery = window.matchMedia('(max-width: ' + this.args.breakpoint + 'px)');
        this.mediaQueryBind = this.callOnResize.bind(this);
        this.mediaQuery.addListener(this.mediaQueryBind);
        this.callOnResize(this.mediaQuery);
    }

    callOnResize(mediaQuery) {
        if (mediaQuery.matches) {
            this.insertMobileVersion();
        } else {
            this.insertDesktopVersion();
        }
    }

    insertMobileVersion() {
        this.tables.forEach(tables__value => {
            if (tables__value.desktop.parentNode === null) {
                return;
            }
            tables__value.mobile.forEach(mobile__value => {
                tables__value.desktop.after(mobile__value);
            });
            tables__value.desktop.remove();
        });
    }

    insertDesktopVersion() {
        this.tables.forEach(tables__value => {
            if (tables__value.desktop.parentNode !== null) {
                return;
            }
            tables__value.mobile.forEach((mobile__value, mobile__key) => {
                if (mobile__key === 0) {
                    mobile__value.after(tables__value.desktop);
                }
                mobile__value.remove();
            });
        });
    }

    prevAll(elem, filter) {
        let sibs = [];
        while ((elem = elem.previousSibling)) {
            if (elem.nodeType === 3) {
                continue;
            }
            if (!filter || filter(elem)) {
                sibs.push(elem);
            }
        }
        return sibs;
    }

    destroy() {
        this.insertDesktopVersion();
        this.mediaQuery.removeListener(this.mediaQueryBind);
    }
}
