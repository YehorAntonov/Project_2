import { showCloseDropDowns, showPassword} from './helpers/headerHelper';
import './styles/styles.scss';
import { addListener, getNodeSelectorAll, getNode } from './utils';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('form', 'click', showPassword);
})

