import './styles/styles.scss';
import { showCloseDropDowns } from '../helper/showCloseDropDowns';
import { showPassword } from './helpers/showPassword';
import { addListener } from '../helper/utils';
import { postFunc } from '../helper/router';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('form', 'click', showPassword);
    addListener('singUp', 'click', postFunc.bind(null, '/registration'));
})
