import Tablewrap from './tablewrap';

document.addEventListener('DOMContentLoaded', () => {
    let t1 = new Tablewrap({
        selector: '.basic',
        breakpoint: 500
    });
    let t2 = new Tablewrap({
        selector: '.advanced',
        breakpoint: 400,
        preserveFirstCol: true
    });
    //t1.destroy();
    //t2.destroy();
});
