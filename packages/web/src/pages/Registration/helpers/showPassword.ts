import { getNode } from '../../helper/utils';

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
