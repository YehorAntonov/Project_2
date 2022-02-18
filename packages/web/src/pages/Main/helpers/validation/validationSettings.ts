import { getNode, getNodeClass, setHTMLValue } from './../../../helper/utils';

export function validateSettings(e) {
  const checkPassword =  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]){8,20}$/;
  const checkLogin =  /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

  if (e.target.id === 'old-password' || getNode('old-password') == getNode('new-password') || getNode('old-password') == getNode('confirm-password')) {
    isValidation(checkPassword, getNode('old-password'), getNodeClass('window__old--input-pass'), 'Wrong value! Check Old password');
  } else if (e.target.id === 'new-password' || getNode('old-password') == getNode('new-password')) {
    isValidation(checkPassword, getNode('new-password'), getNodeClass('window__new--input-pass'), 'Wrong value! Check New password');
  } else if (e.target.id === 'confirm-password' || getNode('old-password') == getNode('confirm-password') || getNode('new-password') !== getNode('confirm-password')) {
    isValidation(checkPassword, getNode('confirm-password'), getNodeClass('window__confirm--input-pass'), 'Wrong value! Check Confirm password');
  } else if (e.target.id === 'old-login' || getNode('old-login') == getNode('new-login')) {
    isValidation(checkLogin, getNode('old-login'), getNodeClass('window__old--input-log'), 'Wrong value! Check Old Login');
  } else if (e.target.id === 'new-login' || getNode('old-login') == getNode('new-login')) {
    isValidation(checkLogin,getNode('new-login'), getNodeClass('window__new--input-log'), 'Wrong value! Check New Login');
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


