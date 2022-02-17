import { addListener, getNode, getNodeClass } from './../../helper/utils';


  addListener("btnconf", 'click', validPassword);
  addListener("btnconf", 'click', validLogin);

function validPassword() {
    const checkStr = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;

    getNode('old-password').addEventListener('click', () => {
      if (checkStr.test(getNode('old-password').value) &&
        getNode('old-password').value !== getNode('new-password').value) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__old--input-pass').classList.remove('invalid');
        getNodeClass('window__old--input-pass').classList.add('valid');
        console.log((getNode('old-password').value));
        console.log('VALID1');
      } else {
        document.getElementById("error").innerHTML = 'Wrong value! Check Old password';
        getNodeClass('window__old--input-pass').classList.add('invalid');
        getNodeClass('window__old--input-pass').classList.remove('valid');
        console.log(getNode('old-password').value);
        console.log('INVALID1');
      }
    })
    getNode('new-password').addEventListener('click', () => {
      if (checkStr.test(getNode('new-password').value) &&
        getNode('new-password').value == getNode('confirm-password').value &&
        getNode('new-password').value !== getNode('old-password').value) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__new--input-pass').classList.remove('invalid');
        getNodeClass('window__new--input-pass').classList.add('valid');
        console.log((getNode('new-password').value));
        console.log('VALID2');
      } else {
        document.getElementById("error").innerHTML = 'Wrong value! Check New password';
        getNodeClass('window__new--input-pass').classList.add('invalid');
        getNodeClass('window__new--input-pass').classList.remove('valid');
        console.log(getNode('new-password').value);
        console.log('INVALID2');
      }
    })

    getNode('confirm-password').addEventListener('click', () => {
      if (checkStr.test(getNode('confirm-password').value) &&
        getNode('confirm-password').value == getNode('new-password').value &&
        getNode('confirm-password').value !== getNode('old-password').value) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__confirm--input-pass').classList.add('valid');
        getNodeClass('window__confirm--input-pass').classList.remove('invalid');
        console.log((getNode('confirm-password').value));
        console.log('VALID3');
      } else {
        document.getElementById("error").innerHTML = 'Wrong value! Check Confirm password';
        getNodeClass('window__confirm--input-pass').classList.add('invalid');
        getNodeClass('window__confirm--input-pass').classList.remove('valid');
        console.log(getNode('confirm-password').value);
        console.log('INVALID3');

      }
    })
  }

  function validLogin() {
    const checkStr = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    getNode('old-login').addEventListener('click', () => {
      if (checkStr.test(getNode('old-login').value) &&
        getNode('old-login').value !== getNode('new-login').value) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__old--input-log').classList.add('valid');
        getNodeClass('window__old--input-log').classList.remove('invalid');
        console.log((getNode('old-login').value));
        console.log('VALID');

      } else {
        document.getElementById("error").innerHTML = 'Wrong value! Check Old Login';
        getNodeClass('window__old--input-log').classList.add('invalid');
        getNodeClass('window__old--input-log').classList.remove('valid');
        console.log((getNode('old-login').value));
        console.log('INVALID');
      }
    })
    getNode('new-login').addEventListener('click', () => {
      if (checkStr.test(getNode('new-login').value) &&
        getNode('old-login').value !== getNode('new-login').value) {
        getNodeClass('window__new--input-log').classList.remove('invalid');
        getNodeClass('window__new--input-log').classList.add('valid');
        document.getElementById("error").innerHTML = '';
        console.log(getNode('new-login').value);
        console.log('VALID');
      } else {
        document.getElementById("error").innerHTML = 'Wrong value! Check New Login';
        getNodeClass('window__new--input-log').classList.add('invalid');
        getNodeClass('window__new--input-log').classList.remove('valid');
        console.log(getNode('new-login').value);
        console.log('INVALID');
      }
    })
  }

