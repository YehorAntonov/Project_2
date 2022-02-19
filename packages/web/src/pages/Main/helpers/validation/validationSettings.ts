import { getNode, getNodeClass, setHTMLValue } from './../../../helper/utils';

export function validateSettings(e) {
  const checkPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
  const checkLogin =  /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
  const nL = ((document.getElementById('new-login'))as HTMLInputElement).value;
  const oL = ((document.getElementById('old-login'))as HTMLInputElement).value;
  if (e.target.id === 'old-password') {
    isValidation(checkPassword, getNode('old-password'), getNodeClass('window-setting__old--input-pass'), 'Wrong value! Check Old password!');
  } else if (e.target.id === 'new-password' || e.target.id === 'confirm-password') {
    isValidation(checkPassword, getNode('new-password'), getNodeClass('window-setting__new--input-pass'), 'Wrong value! Check Your password!');
  } else if (e.target.id === 'old-login') {
    isValidation(checkLogin, getNode('old-login'), getNodeClass('window-setting__old--input-log'), 'Wrong value! Check Old Login');
  } else if (e.target.id === 'new-login') {
    isValidation(checkLogin,getNode('new-login'), getNodeClass('window-setting__old--input-log'), 'Wrong value! Check New Login');
  } else if ((e.target.id === 'new-login' || e.target.id === 'old-login')){
    comparisonValue(oL, nL, getNodeClass('window-setting__old--input-log'), 'Wrong value! Check New Login')
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


function comparisonValue(value1, value2, nodeInput, errorText) {
  if ( value1 !== value2) {
    setHTMLValue('errorSettings', errorText);
    nodeInput.classList.add('invalid');
  } else {
    setHTMLValue('errorSettings', '');
    nodeInput.classList.remove('invalid');
  }
}
