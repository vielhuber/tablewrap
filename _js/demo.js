import Tablewrap from './tablewrap';

document.addEventListener('DOMContentLoaded', () => {
    let tablewrap = new Tablewrap({ selector: 'table', breakpoint: 900 });
    setTimeout(() => {
        tablewrap.destroy();
    }, 5000);
});
