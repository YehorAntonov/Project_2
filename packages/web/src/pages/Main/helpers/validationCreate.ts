import { addListener, getNode, getNodeClass } from './../../helper/utils';

addListener("btn-create", 'click', validNames);
addListener("btn-create", 'click', validAge);
addListener("btn-create", 'click', validEmail);
addListener("btn-create", 'click', validPhone);



function validNames() {
    const checkStr = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

    getNode('nameCreate').addEventListener('click', () => {
        if (checkStr.test(getNode('nameCreate').value)) {
            document.getElementById('errorCreate').innerHTML = '';
            getNodeClass('window__first--input').classList.remove('invalid');
            getNodeClass('window__first--input').classList.add('valid');
            console.log((getNode('nameCreate').value));
            console.log('VALID1');
        } else {
            document.getElementById('errorCreate').innerHTML = 'Wrong value! Check your First Name';
            getNodeClass('window__first--input').classList.add('invalid');
            getNodeClass('window__first--input').classList.remove('valid');
            console.log(getNode('nameCreate').value);
            console.log('INVALID1');
        }
    })
    getNode('lastCreate').addEventListener('click', () => {
        if (checkStr.test(getNode('lastCreate').value)) {
            document.getElementById('errorCreate').innerHTML = '';
            getNodeClass('window__last--input').classList.remove('invalid');
            getNodeClass('window__last--input').classList.add('valid');
            console.log((getNode('lastCreate').value));
            console.log('VALID2');
        } else {
            document.getElementById('errorCreate').innerHTML = 'Wrong value! Check your Last Name';
            getNodeClass('window__last--input').classList.add('invalid');
            getNodeClass('window__last--input').classList.remove('valid');
            console.log(getNode('lastCreate').value);
            console.log('INVALID2');
        }
    })

    getNode('cityCreate').addEventListener('click', () => {
        if (checkStr.test(getNode('cityCreate').value)) {
            document.getElementById('errorCreate').innerHTML = '';
            getNodeClass('window__city--input').classList.add('valid');
            getNodeClass('window__city--input').classList.remove('invalid');
            console.log((getNode('cityCreate').value));
            console.log('VALID3');
        } else {
            document.getElementById('errorCreate').innerHTML = 'Wrong value! Check name of City';
            getNodeClass('window__city--input').classList.add('invalid');
            getNodeClass('window__city--input').classList.remove('valid');
            console.log(getNode('cityCreate').value);
            console.log('INVALID3');

        }
    })

    getNode('companyCreate').addEventListener('click', () => {
        if (checkStr.test(getNode('companyCreate').value)) {
            document.getElementById('errorCreate').innerHTML = '';
            getNodeClass('window__company--input').classList.add('valid');
            getNodeClass('window__company--input').classList.remove('invalid');
            console.log((getNode('companyCreate').value));
            console.log('VALID3');
        } else {
            document.getElementById('errorCreate').innerHTML = 'Wrong value! Check name of your company';
            getNodeClass('window__company--input').classList.add('invalid');
            getNodeClass('window__company--input').classList.remove('valid');
            console.log(getNode('companyCreate').value);
            console.log('INVALID3');

        }
    })
}


function validAge() {
    const checkStr = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/;
    getNode('ageCreate').addEventListener('click', () => {
        if (checkStr.test(getNode('ageCreate').value) &&
            getNode('age').value.length === 2) {
            document.getElementById('errorCreate').innerHTML = '';
            getNodeClass('window__age--input').classList.add('valid');
            getNodeClass('window__age--input').classList.remove('invalid');
            console.log((getNode('ageCreate').value));
            console.log('VALID');

        } else {
            document.getElementById('errorCreate').innerHTML = 'Wrong value! Check your Age';
            getNodeClass('window__age--input').classList.add('invalid');
            getNodeClass('window__age--input').classList.remove('valid');
            console.log((getNode('ageCreate').value));
            console.log('INVALID');
        }
    })
    }
 function validEmail() {
     const checkStr = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    getNode('emailCreate').addEventListener('click', () => {
        if (checkStr.test(getNode('emailCreate').value)) {
            getNodeClass('window__email--input').classList.remove('invalid');
            getNodeClass('window__email--input').classList.add('valid');
            document.getElementById('errorCreate').innerHTML = '';
            console.log(getNode('emailCreate').value);
            console.log('VALID');
        } else {
            document.getElementById('errorCreate').innerHTML = 'Wrong value! Check your e-mail';
            getNodeClass('window__email--input').classList.add('invalid');
            getNodeClass('window__email--input').classList.remove('valid');
            console.log(getNode('emailCreate').value);
            console.log('INVALID');
        }
    })
}


function validPhone() {
const checkStr = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    getNode('numberCreate').addEventListener('click', () => {
        if (checkStr.test(getNode('numberCreate').value)){
            getNodeClass('window__number--input').classList.remove('invalid');
            getNodeClass('window__number--input').classList.add('valid');
            document.getElementById('errorCreate').innerHTML = '';
            console.log(getNode('numberCreate').value);
            console.log('VALID');
        } else {
            document.getElementById('errorCreate').innerHTML = 'Wrong value! Check number of your phone';
            getNodeClass('window__number--input').classList.add('invalid');
            getNodeClass('window__number--input').classList.remove('valid');
            console.log(getNode('numberCreate').value);
            console.log('INVALID');
        }
    })
}

