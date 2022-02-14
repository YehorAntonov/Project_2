import { getNode } from "../utils";


export function showPassword(e) {
    const idValue = e.target.id;
    if (idValue === 'view') {
        helperPasswords(idValue, 'password');
    } else if (idValue === 'confirm-view') {
        helperPasswords(idValue, 'password-confirm');
    }
}

function helperPasswords(id, input) {
    if (getNode(input).getAttribute('type') == 'password') {
        getNode(id).classList.add('view-change');
        getNode(input).setAttribute('type', 'text');
    } else {
        getNode(id).classList.remove('view-change');
        getNode(input).setAttribute('type', 'password');
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