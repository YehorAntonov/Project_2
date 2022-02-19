import './styles/styles.scss';
import { showCloseDropDowns} from '../helper/showCloseDropDowns';
import { viewPassword } from './helpers/headerHelper';
import { addListener, getNode } from '../helper/utils';
import { postFunc } from '../helper/router';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('view', 'click', viewPassword);
    addListener('authorization', 'click', postFunc.bind(null, '/login'));
})

