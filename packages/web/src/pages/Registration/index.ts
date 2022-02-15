import './styles/styles.scss';
import { showCloseDropDowns } from '../helper/showCloseDropDowns';
import { showPassword } from './helpers/showPassword';
import { addListener } from '../helper/utils';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('form', 'click', showPassword);
})
