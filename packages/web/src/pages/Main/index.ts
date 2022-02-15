import './styles/styles.scss';
import { showCloseDropDowns } from '../helper/showCloseDropDowns';
import { addListener, getNode } from '../helper/utils';
import { showDatabases, showSorting } from './helpers/showDropDown';

document.addEventListener('DOMContentLoaded', function () {
    showCloseDropDowns();
    addListener('panel', 'click', showDatabases.bind(null, getNode('db'), getNode('mongoDB'), getNode('sectionDB')));
    addListener('panel', 'click', showSorting.bind(null, getNode('sorting'), getNode('fields'), getNode('sortSection')));
})