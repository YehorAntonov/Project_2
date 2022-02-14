import { getNode } from "../utils";


export function viewPassword() {
    if (getNode('password').getAttribute('type') == 'password') {
        getNode('view').classList.add('view-change');
        getNode('password').setAttribute('type', 'text');
    } else {
        getNode('view').classList.remove('view-change');
        getNode('password').setAttribute('type', 'password');
    }
}


export function showCloseDropDowns() {
    let node, countLocal = 0, countTheme = 0;
    getNode('drop').onclick = function (e) {
        node = e.target.id;
        if (node === 'en') {
            countLocal++;
            if (countLocal % 2 !== 0) {
                getNode('ru').classList.add('show-locl');
                getNode('locl-block').classList.add('change-btn');
            } else {
                getNode('ru').classList.remove('show-locl');
                getNode('locl-block').classList.remove('change-btn');
            }
        }
        else {
            countLocal = 0;
            getNode('ru').classList.remove('show-locl');
            getNode('locl-block').classList.remove('change-btn');
        }

        if (node === 'light') {
            countTheme++;
            if (countTheme % 2 !== 0) {
                getNode('theme').classList.add('show-theme');
                getNode('line').classList.add('show-locl');
            } else {
                getNode('theme').classList.remove('show-theme');
            }
        } else {
            countTheme = 0;
            getNode('theme').classList.remove('show-theme');
        }
    }
}