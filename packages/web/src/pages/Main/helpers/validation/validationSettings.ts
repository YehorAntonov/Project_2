// import { getNode, getNodeClass, setHTMLValue } from './../../../helper/utils';
//
// export function validateSettings(e) {
//   const checkPassword =  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]){8,20}$/;
//   const checkLogin =  /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
//
//   if (e.target.id === 'old-password') {
//     isValidation(checkPassword, getNode('old-password'), getNodeClass('window__old--input-pass'), 'Wrong value! Check Old password!');
//   } else if (e.target.id === 'new-password' || e.target.id === 'confirm-password') {
//     isValidation(checkPassword, getNode('new-password'), getNodeClass('window__new--input-pass'), 'Wrong value! Check Your password!');
//   } else if (e.target.id === 'old-login') {
//     isValidation(checkLogin, getNode('old-login'), getNodeClass('window__old--input-log'), 'Wrong value! Check Old Login');
//   } else if (e.target.id === 'new-login') {
//     isValidation(checkLogin,getNode('new-login'), getNodeClass('window__old--input-log'), 'Wrong value! Check New Login');
//   } else if ((e.target.id === 'new-login' || e.target.id === 'old-login')){
//     comparisonValue(getNode('new-login').value, getNode('old-login').value, getNodeClass('window-setting__old--input-log'), 'xyz')
//
//   }
// }
//
// function isValidation(reg, valueNode, nodeInput, errorText) {
//   if (reg.test(valueNode.value)) {
//     setHTMLValue('errorCreate', '')
//     nodeInput.classList.remove('invalid');
//   } else {
//     setHTMLValue('errorCreate', errorText);
//     nodeInput.classList.add('invalid');
//   }
// }
//
// function validAge(valueNode, nodeInput, errorText) {
//   if (valueNode.value < 18 || valueNode.value > 100) {
//     setHTMLValue('errorCreate', errorText);
//     nodeInput.classList.add('invalid');
//   } else {
//     setHTMLValue('errorCreate', '');
//     nodeInput.classList.remove('invalid');
//   }
// }
//
// function comparisonValue(value1, value2, nodeInput, errorText) {
//   if ( value1 !== value2) {
//     setHTMLValue('error', errorText);
//     nodeInput.classList.add('invalid');
//   } else {
//     setHTMLValue('error', '');
//     nodeInput.classList.remove('invalid');
//   }
// }
