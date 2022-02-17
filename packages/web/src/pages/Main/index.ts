import './styles/styles.scss';
import { showCloseDropDowns } from '../helper/showCloseDropDowns';
import { addListener, getNode } from '../helper/utils';
import { showDatabases, showSorting } from './helpers/showDropDown';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('panel', 'click', showDatabases.bind(null, getNode('db'), getNode('mongoDB'), getNode('sectionDB')));
    addListener('panel', 'click', showSorting.bind(null, getNode('sorting'), getNode('fields'), getNode('sortSection')));
})



//Не знала куда подключать модалки положила тут.
const modalCreateBtn = document.getElementById('modalCreate');
const modalUpdateBtn = document.getElementById('modalUpdate');
const modalClearBtn = document.getElementById('modalClear');
const modalSettingsBtn = document.getElementById('modalSettings');


addListener("create", 'click', openModalCreate);
addListener("update", 'click', openModalUpdate);
addListener("clear", 'click', openModalClear);
addListener("settingsbtn", 'click', openModalSettings);

function openModalCreate() {
  modalCreateBtn.style.display = 'block';
}
function openModalUpdate() {
  modalUpdateBtn.style.display = 'block';
}
function openModalClear() {
  modalClearBtn.style.display = 'block';
}

function openModalSettings() {
  modalSettingsBtn.style.display = 'block';
}
