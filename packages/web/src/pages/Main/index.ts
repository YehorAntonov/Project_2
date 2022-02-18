import './styles/styles.scss';
import {showCloseDropDowns} from '../helper/showCloseDropDowns';
import {addListener, getNode} from '../helper/utils';
import {showDatabases, showSorting} from './helpers/showDropDown';
import {showModals, closeModals} from './helpers/showModals';
import {validate} from './helpers/validation/validationCreate';
//
import {validateUpdate} from './helpers/validation/validationUpdate';
import {validateSettings} from './helpers/validation/validationSettings';


document.addEventListener('DOMContentLoaded', function () {
  showCloseDropDowns();
  addListener('panel', 'click', showDatabases.bind(null, getNode('db'), getNode('mongoDB'), getNode('sectionDB')));
  addListener('panel', 'click', showSorting.bind(null, getNode('sorting'), getNode('fields'), getNode('sortSection')));
  addListener('create', 'click', showModals.bind(null, getNode('modalCreate')));
  addListener('closeCreate', 'click', closeModals.bind(null, getNode('modalCreate')));
  addListener('update', 'click', showModals.bind(null, getNode('modalUpdate')));
  addListener('closeUpdate', 'click', closeModals.bind(null, getNode('modalUpdate')));
  addListener('settings', 'click', showModals.bind(null, getNode('modalSettings')));
  addListener('closeSettings', 'click', closeModals.bind(null, getNode('modalSettings')));
  addListener('clear', 'click', showModals.bind(null, getNode('modalClear')));
  addListener('close-btn', 'click', closeModals.bind(null, getNode('modalClear')));

  addListener('modalCreate', 'change', validate);
  //
  addListener('modalUpdate', 'change', validateUpdate);
  addListener('modalSettings', 'change', validateSettings);
})
