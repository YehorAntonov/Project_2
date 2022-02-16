function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}

function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
    }
    return false;
}

function getNodeClass(selector) {
    const node = document.querySelector(`.${selector}`);
    if (node) {
        return node;
    }
    return false;
}

function getNodeAllClass(selector) {
    const node = document.querySelectorAll(`.${selector}`);
    if (node) {
        return node;
    }
    return false;
}

function getNodeSelectorAll(selector) {
    const node = document.querySelectorAll(`[${selector}]`);
    if (node) {
        return node;
    }
    return false;
}

function inputValueGet(id) {
    const input = document.getElementById(id);
    if (input) {
        return input.value;
    }
    return '';
}

function disabledElemement(id, boolean) {
    const input = document.getElementById(id);
    if (input) {
        return input.disabled = boolean;
    }
}


function addListener(id, eventType, cb) {
    const node = document.getElementById(id)
    if (node) {
        node.addEventListener(eventType, cb)
        return true
    }
    return false
}


addListener("btnUpdate", 'click', validNames);
addListener("btnUpdate", 'click', validAge);
addListener("btnUpdate", 'click', validEmail);
addListener("btnUpdate", 'click', validPhone);



function validNames() {
    const checkStr = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

    getNode('name').addEventListener('click', () => {
        if (checkStr.test(getNode('name').value)) {
            document.getElementById("error").innerHTML = '';
            getNodeClass('window__first--input').classList.remove('invalid');
            getNodeClass('window__first--input').classList.add('valid');
            console.log((getNode('name').value));
            console.log('VALID1');
        } else {
            document.getElementById("error").innerHTML = 'Wrong value! Check your First Name';
            getNodeClass('window__first--input').classList.add('invalid');
            getNodeClass('window__first--input').classList.remove('valid');
            console.log(getNode('name').value);
            console.log('INVALID1');
        }
    })
    getNode('last').addEventListener('click', () => {
        if (checkStr.test(getNode('last').value)) {
            document.getElementById("error").innerHTML = '';
            getNodeClass('window__last--input').classList.remove('invalid');
            getNodeClass('window__last--input').classList.add('valid');
            console.log((getNode('last').value));
            console.log('VALID2');
        } else {
            document.getElementById("error").innerHTML = 'Wrong value! Check your Last Name';
            getNodeClass('window__last--input').classList.add('invalid');
            getNodeClass('window__last--input').classList.remove('valid');
            console.log(getNode('last').value);
            console.log('INVALID2');
        }
    })

    getNode('city').addEventListener('click', () => {
        if (checkStr.test(getNode('city').value)) {
            document.getElementById("error").innerHTML = '';
            getNodeClass('window__city--input').classList.add('valid');
            getNodeClass('window__city--input').classList.remove('invalid');
            console.log((getNode('city').value));
            console.log('VALID3');
        } else {
            document.getElementById("error").innerHTML = 'Wrong value! Check name of City';
            getNodeClass('window__city--input').classList.add('invalid');
            getNodeClass('window__city--input').classList.remove('valid');
            console.log(getNode('city').value);
            console.log('INVALID3');

        }
    })

    getNode('company').addEventListener('click', () => {
        if (checkStr.test(getNode('company').value)) {
            document.getElementById("error").innerHTML = '';
            getNodeClass('window__company--input').classList.add('valid');
            getNodeClass('window__company--input').classList.remove('invalid');
            console.log((getNode('company').value));
            console.log('VALID3');
        } else {
            document.getElementById("error").innerHTML = 'Wrong value! Check name of your company';
            getNodeClass('window__company--input').classList.add('invalid');
            getNodeClass('window__company--input').classList.remove('valid');
            console.log(getNode('company').value);
            console.log('INVALID3');

        }
    })
}


function validAge() {
    const checkStr = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/;
    getNode('age').addEventListener('click', () => {
        if (checkStr.test(getNode('age').value) &&
            getNode('age').value.length === 2) {
            document.getElementById("error").innerHTML = '';
            getNodeClass('window__age--input').classList.add('valid');
            getNodeClass('window__age--input').classList.remove('invalid');
            console.log((getNode('age').value));
            console.log('VALID');

        } else {
            document.getElementById("error").innerHTML = 'Wrong value! Check your Age';
            getNodeClass('window__age--input').classList.add('invalid');
            getNodeClass('window__age--input').classList.remove('valid');
            console.log((getNode('age').value));
            console.log('INVALID');
        }
    })
    }
 function validEmail() {
     const checkStr = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    getNode('email').addEventListener('click', () => {
        if (checkStr.test(getNode('email').value)) {
            getNodeClass('window__email--input').classList.remove('invalid');
            getNodeClass('window__email--input').classList.add('valid');
            document.getElementById("error").innerHTML = '';
            console.log(getNode('email').value);
            console.log('VALID');
        } else {
            document.getElementById("error").innerHTML = 'Wrong value! Check your e-mail';
            getNodeClass('window__email--input').classList.add('invalid');
            getNodeClass('window__email--input').classList.remove('valid');
            console.log(getNode('email').value);
            console.log('INVALID');
        }
    })
}


function validPhone() {
const checkStr = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    getNode('number').addEventListener('click', () => {
        if (checkStr.test(getNode('number').value)){
            getNodeClass('window__number--input').classList.remove('invalid');
            getNodeClass('window__number--input').classList.add('valid');
            document.getElementById("error").innerHTML = '';
            console.log(getNode('number').value);
            console.log('VALID');
        } else {
            document.getElementById("error").innerHTML = 'Wrong value! Check number of your phone';
            getNodeClass('window__number--input').classList.add('invalid');
            getNodeClass('window__number--input').classList.remove('valid');
            console.log(getNode('number').value);
            console.log('INVALID');
        }
    })
}

