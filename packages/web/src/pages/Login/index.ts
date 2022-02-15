import './styles/styles.scss';
import { showCloseDropDowns} from '../helper/showCloseDropDowns';
import { viewPassword } from './helpers/headerHelper';
import { addListener } from '../helper/utils';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('view', 'click', viewPassword);
})
