import { getNode, getNodeClass, setHTMLValue } from './../../../helper/utils';

export function validateUpdate(e) {
  const regNames =  /^([А-Я]{1}[а-яё]{2,19}$|[A-Z]{1}[a-z]{2,19})$/;
  const regPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
  const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (e.target.id === 'nameUpdate') {
    isValidation(regNames, getNode('nameUpdate'), getNodeClass('window__first--input'), 'Wrong value! Check your First Name');
  } else if (e.target.id === 'lastUpdate') {
    isValidation(regNames, getNode('lastUpdate'), getNodeClass('window__last--input'), 'Wrong value! Check your Last Name');
  } else if (e.target.id === 'cityUpdate') {
    isValidation(regNames, getNode('cityUpdate'), getNodeClass('window__city--input'), 'Wrong value! Check name of City');
  } else if (e.target.id === 'companyCreate') {
    isValidation(regNames, getNode('companyUpdate'), getNodeClass('window__company--input'), 'Wrong value! Check name of your company');
  } else if (e.target.id === 'ageUpdate') {
    validAge(getNode('ageUpdate'), getNodeClass('window__age--input'), 'Wrong value! Check your Age');
  } else if (e.target.id === 'numberUpdate') {
    isValidation(regPhone, getNode('numberUpdate'), getNodeClass('window__number--input'), 'Wrong value! Check number of your phone');
  } else if (e.target.id === 'emailUpdate') {
    isValidation(regEmail, getNode('emailUpdate'),  getNodeClass('window__email--input'), 'Wrong value! Check your e-mail')
  }
}

function isValidation(reg, valueNode, nodeInput, errorText) {
  if (reg.test(valueNode.value)) {
    setHTMLValue('errorCreate', '')
    nodeInput.classList.remove('invalid');
  } else {
    setHTMLValue('errorCreate', errorText);
    nodeInput.classList.add('invalid');
  }
}

function validAge(valueNode, nodeInput, errorText) {
  if (valueNode.value < 18 || valueNode.value > 100) {
    setHTMLValue('errorCreate', errorText);
    nodeInput.classList.add('invalid');
  } else {
    setHTMLValue('errorCreate', '');
    nodeInput.classList.remove('invalid');
  }
}
