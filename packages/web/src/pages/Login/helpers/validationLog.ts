import {getNode, getNodeClass, setHTMLValue} from './../../helper/utils';

export function validateLog() {
  const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]){8,20}$/;
  const checkLogin = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

  if (!checkPassword.test('password')) {
    isValidation(checkPassword, getNode('password'), getNodeClass('window-setting__old--input-pass'), 'Wrong value!');
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
