import { getNode } from '../../helper/utils';

export function viewPassword() {
    if (getNode('password').getAttribute('type') == 'password') {
        getNode('view').classList.add('view-change');
        getNode('password').setAttribute('type', 'text');
    } else {
        getNode('view').classList.remove('view-change');
        getNode('password').setAttribute('type', 'password');
    }
}
