import { getNode, getNodeClass, setHTMLValue } from './../../../helper/utils';

export function validateUpdate(e) {
    const regNames =  /^([А-Я]{1}[а-яё]{2,19}$|[A-Z]{1}[a-z]{2,19})$/;
    const regPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    switch(e.target.id){
        case 'nameUpdate':
            isValidation(regNames, getNode('nameUpdate'), getNodeClass('validName'), 'Wrong value! Check your First Name');
            break;
        case 'lastUpdate':
            isValidation(regNames, getNode('lastUpdate'), getNodeClass('validLastName'), 'Wrong value! Check your Last Name');
            break;
        case 'cityUpdate':
            isValidation(regNames, getNode('cityUpdate'), getNodeClass('validCity'), 'Wrong value! Check name of City');
            break;
        case 'companyUpdate':
            isValidation(regNames, getNode('companyUpdate'), getNodeClass('validCompany'), 'Wrong value! Check name of your company');
            break;
        case 'ageUpdate':
            validAge(getNode('ageUpdate'), getNodeClass('validAge'), 'Wrong value! Check your Age');
            break;
        case 'numberUpdate':
            isValidation(regPhone, getNode('numberUpdate'), getNodeClass('validNumber'), 'Wrong value! Check number of your phone');
            break;
        case 'emailUpdate':
            isValidation(regEmail, getNode('emailUpdate'),  getNodeClass('validEmail'), 'Wrong value! Check your e-mail');
            break;
        default: return;
    }
}

function isValidation(reg, valueNode, nodeInput, errorText) {
  if (reg.test(valueNode.value)) {
    setHTMLValue('errorUpdate', '')
    nodeInput.classList.remove('invalid');
  } else {
    setHTMLValue('errorUpdate', errorText);
    nodeInput.classList.add('invalid');
  }
}

function validAge(valueNode, nodeInput, errorText) {
  if (valueNode.value < 18 || valueNode.value > 100) {
    setHTMLValue('errorUpdate', errorText);
    nodeInput.classList.add('invalid');
  } else {
    setHTMLValue('errorUpdate', '');
    nodeInput.classList.remove('invalid');
  }
}
