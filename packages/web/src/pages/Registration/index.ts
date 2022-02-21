import './styles/styles.scss';
import { showCloseDropDowns } from '../helper/showCloseDropDowns';
import { showPassword } from './helpers/showPassword';
import { addListener, getNode } from '../helper/utils';
import { postFunc } from '../helper/router';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('form', 'click', showPassword);
    addListener('singUp', 'click', checkFieldRegistration);

})

export function checkFieldRegistration() {
    if (getNode('errorRegister').innerText === '') {
        const data = {
            login: getNode('loginRegistration').value,
            password: getNode('password-confirm').value,
        }
        postFunc('/registration', data);
    }
}
