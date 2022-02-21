import {getNode, getNodeClass, setHTMLValue} from './../../../helper/utils';

export function validateSettings(e) {
  const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]){8,20}$/;
  const checkLogin = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

  if (e.target.id === 'old-password') {
    isValidation(checkPassword, getNode('old-password'), getNodeClass('window-setting__old--input-pass'), 'Wrong value! Check Old password!');
  } else if (e.target.id === 'new-password') {
    isValidation(checkPassword, getNode('new-password'), getNodeClass('window-setting__new--input-pass'), 'Wrong value! Check Your New password!');
  } else if (e.target.id === 'confirm-password') {
    isValidation(checkPassword, getNode('confirm-password'), getNodeClass('window-setting__confirm--input-pass'), 'Wrong value! Check Your confirm password!');
    ValidateComparesPasswordSetting(getNode('old-password').value, getNode('new-password').value, getNode('confirm-password').value, 'Wrong value! Check your passwords')
  } else if (e.target.id === 'old-login') {
    isValidation(checkLogin, getNode('old-login'), getNodeClass('window-setting__old--input-log'), 'Wrong value! Check Old Login');
  } else if (e.target.id === 'new-login') {
    isValidation(checkLogin, getNode('new-login'), getNodeClass('validateNewLogin'), 'Wrong value! Check New Login');
    ValidateComparesLoginSetting(getNode('new-login').value, getNode('old-login').value, 'Wrong value! Check your Logins')
  }
}
function isValidation(reg, valueNode, nodeInput, errorText) {
  if (reg.test(valueNode.value)) {
    setHTMLValue('errorSettings', '')
    nodeInput.classList.remove('invalid');
  } else {
    setHTMLValue('errorSettings', errorText);
    nodeInput.classList.add('invalid');
  }
}


function ValidateComparesPasswordSetting(value1, value2, value3, errorText) {
  if (value1 === value2 || value2 !== value3) {
    setHTMLValue('errorSettings', errorText);
  } else {
    setHTMLValue('errorSettings', '');
  }
}


function ValidateComparesLoginSetting(value1, value2, errorText) {
  if (value1 === value2) {
    setHTMLValue('errorSettings', errorText);
  } else {
    setHTMLValue('errorSettings', '');
  }
}




