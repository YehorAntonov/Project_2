import { addListener, getNode, getNodeClass } from './../../helper/utils';


// function validAll() {
//   validNames();
//
// }


export function validNames() {
    const checkStr = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

    getNode('nameUpdate').addEventListener('click', () => {
        if (checkStr.test(getNode('nameUpdate').value)) {
            document.getElementById("errorUpdate").innerHTML = '';
            getNodeClass('window__first--input').classList.remove('invalid');
            getNodeClass('window__first--input').classList.add('valid');
            console.log((getNode('nameUpdate').value));
            console.log('VALID1');
        } else {
            document.getElementById('errorUpdate').innerHTML = 'Wrong value! Check your First Name';
            getNodeClass('window__first--input').classList.add('invalid');
            getNodeClass('window__first--input').classList.remove('valid');
            console.log(getNode('nameUpdate').value);
            console.log('INVALID1');
        }
    })
    getNode('lastUpdate').addEventListener('click', () => {
        if (checkStr.test(getNode('lastUpdate').value)) {
            document.getElementById('errorUpdate').innerHTML = '';
            getNodeClass('window__last--input').classList.remove('invalid');
            getNodeClass('window__last--input').classList.add('valid');
            console.log((getNode('lastUpdate').value));
            console.log('VALID2');
        } else {
            document.getElementById('errorUpdate').innerHTML = 'Wrong value! Check your Last Name';
            getNodeClass('window__last--input').classList.add('invalid');
            getNodeClass('window__last--input').classList.remove('valid');
            console.log(getNode('lastUpdate').value);
            console.log('INVALID2');
        }
    })

    getNode('cityUpdate').addEventListener('click', () => {
        if (checkStr.test(getNode('cityUpdate').value)) {
            document.getElementById('errorUpdate').innerHTML = '';
            getNodeClass('window__city--input').classList.add('valid');
            getNodeClass('window__city--input').classList.remove('invalid');
            console.log((getNode('cityUpdate').value));
            console.log('VALID3');
        } else {
            document.getElementById('errorUpdate').innerHTML = 'Wrong value! Check name of City';
            getNodeClass('window__city--input').classList.add('invalid');
            getNodeClass('window__city--input').classList.remove('valid');
            console.log(getNode('cityUpdate').value);
            console.log('INVALID3');

        }
    })

    getNode('companyUpdate').addEventListener('click', () => {
        if (checkStr.test(getNode('companyUpdate').value)) {
            document.getElementById('errorUpdate').innerHTML = '';
            getNodeClass('window__company--input').classList.add('valid');
            getNodeClass('window__company--input').classList.remove('invalid');
            console.log((getNode('companyUpdate').value));
            console.log('VALID3');
        } else {
            document.getElementById('errorUpdate').innerHTML = 'Wrong value! Check name of your company';
            getNodeClass('window__company--input').classList.add('invalid');
            getNodeClass('window__company--input').classList.remove('valid');
            console.log(getNode('companyUpdate').value);
            console.log('INVALID3');

        }
    })
}


export function validAge() {
    const checkStr = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/;
    getNode('ageUpdate').addEventListener('click', () => {
        if (checkStr.test(getNode('ageUpdate').value) &&
            getNode('age').value.length === 2) {
            document.getElementById('errorUpdate').innerHTML = '';
            getNodeClass('window__age--input').classList.add('valid');
            getNodeClass('window__age--input').classList.remove('invalid');
            console.log((getNode('ageUpdate').value));
            console.log('VALID');

        } else {
            document.getElementById('errorUpdate').innerHTML = 'Wrong value! Check your Age';
            getNodeClass('window__age--input').classList.add('invalid');
            getNodeClass('window__age--input').classList.remove('valid');
            console.log((getNode('ageUpdate').value));
            console.log('INVALID');
        }
    })
    }
export function validEmail() {
     const checkStr = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    getNode('emailUpdate').addEventListener('click', () => {
        if (checkStr.test(getNode('emailUpdate').value)) {
            getNodeClass('window__email--input').classList.remove('invalid');
            getNodeClass('window__email--input').classList.add('valid');
            document.getElementById('errorUpdate').innerHTML = '';
            console.log(getNode('emailUpdate').value);
            console.log('VALID');
        } else {
            document.getElementById('errorUpdate').innerHTML = 'Wrong value! Check your e-mail';
            getNodeClass('window__email--input').classList.add('invalid');
            getNodeClass('window__email--input').classList.remove('valid');
            console.log(getNode('emailUpdate').value);
            console.log('INVALID');
        }
    })
}


export function validPhone() {
const checkStr = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    getNode('numberUpdate').addEventListener('click', () => {
        if (checkStr.test(getNode('numberUpdate').value)){
            getNodeClass('window__number--input').classList.remove('invalid');
            getNodeClass('window__number--input').classList.add('valid');
            document.getElementById('errorUpdate').innerHTML = '';
            console.log(getNode('numberUpdate').value);
            console.log('VALID');
        } else {
            document.getElementById('errorUpdate').innerHTML = 'Wrong value! Check number of your phone';
            getNodeClass('window__number--input').classList.add('invalid');
            getNodeClass('window__number--input').classList.remove('valid');
            console.log(getNode('numberUpdate').value);
            console.log('INVALID');
        }
    })
}

