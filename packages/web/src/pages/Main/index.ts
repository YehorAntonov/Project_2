import './styles/styles.scss';
import {showCloseDropDowns} from '../helper/showCloseDropDowns';
import {addListener, getNode} from '../helper/utils';
import {showDatabases, showSorting} from './helpers/showDropDown';
import {showModals, closeModals} from './helpers/showModals';
import {validate} from './helpers/validation/validationCreate';
import { render } from './helpers/render';
import { getData } from './helpers/routers/getRouter';
import { checkFieldCreate } from './helpers/routers/postRouter';

import { validateUpdate } from './helpers/validation/validationUpdate';
import { checkFieldUpdate } from './helpers/routers/putRouter';
import { checkFieldSetting, settingSRouter } from './helpers/routers/settingsRouter';
import { clearAllRouter } from './helpers/routers/deleteRouter';
import { validateSettings } from './helpers/validation/validationSettings';
import { logoutUser } from './helpers/routers/logoutRouter';

document.addEventListener('DOMContentLoaded', function () {
  init();
})

function init() {
  getData();
  localStorage.setItem('databases', 'mySql');
  showCloseDropDowns();
  addListener('panel', 'click', showDatabases.bind(null, getNode('db'), getNode('mongoDB'), getNode('sectionDB')));
  addListener('panel', 'click', showSorting.bind(null, getNode('sorting'), getNode('fields'), getNode('sortSection')));
  addListener('logout', 'click', logoutUser);
  addListener('create', 'click', showModals.bind(null, getNode('modalCreate')));
  addListener('closeCreate', 'click', closeModals.bind(null, getNode('modalCreate')));
  addListener('update', 'click', showModals.bind(null, getNode('modalUpdate')));
  addListener('closeUpdate', 'click', closeModals.bind(null, getNode('modalUpdate')));
  addListener('settings', 'click', showModals.bind(null, getNode('modalSettings')));
  addListener('closeSettings', 'click', closeModals.bind(null, getNode('modalSettings')));
  addListener('clear', 'click', showModals.bind(null, getNode('modalClear')));
  addListener('close-btn', 'click', closeModals.bind(null, getNode('modalClear')));
  addListener('btn-ClearNo', 'click', closeModals.bind(null, getNode('modalClear')));
  addListener('modalCreate', 'change', validate);
  addListener('btn-create', 'click', checkFieldCreate);
  addListener('modalUpdate', 'change', validateUpdate);
  addListener('btnUpdate', 'click', checkFieldUpdate);
  addListener('btn-ClearYes', 'click', clearAllRouter);
  addListener('btnconf', 'click', checkFieldSetting);
  addListener('modalSettings', 'change', validateSettings);
}
