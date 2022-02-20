import {getNode, getNodeClass, setHTMLValue} from './../../helper/utils';

export function validateReg() {
  const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]){8,20}$/;
  const checkLogin = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

  if (!checkPassword.test('password') {
    isValidation(checkPassword, getNode('password'), getNodeClass('window-setting__old--input-pass'), 'Wrong value!');
  } else if (!checkPassword.test('confirm-password') || 'confirm-password' !== 'password') {
    isValidation(checkPassword, getNode('confirm-password'), getNodeClass('window-setting__confirm--input-pass'), 'Wrong value! Check Your confirm password!');
    ValidateComparesPasswordSetting(getNode('password').value, getNode('confirm-password').value, 'Wrong value! Check your passwords')
  }
  if (!checkLogin.test('username')) {
    isValidation(checkLogin, getNode('username'), getNodeClass('window-setting__old--input-log'), 'Wrong value! Check Login');
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


function ValidateComparesPasswordSetting(value1, value2, errorText) {
  if (value1 === value2) {
    setHTMLValue('errorSettings', errorText);
  } else {
    setHTMLValue('errorSettings', '');
  }
}
