import { showCloseDropDowns, viewPassword } from './helpers/headerHelper';
import './styles/styles.scss';
import { addListener } from './utils';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('view', 'click', viewPassword);
})