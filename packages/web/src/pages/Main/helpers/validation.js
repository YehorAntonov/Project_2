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


/*
Без регулярок
const oldPass = document.getElementById('old-password');
addListener("btnconf", 'click', pasValid);
addListener("btnconf", 'click', logValid);

function pasValid() {
    const loginRegex = ['a', 'b', '!', 'v', '-', '_', 'd', 'e'];
    const str = getNode('old-password').value;
    const conf = getNode('confirm-password').value;
    const newPas = getNode('new-password').value;

    if (str.length > 5 && str.length < 20 && (!str.includes(loginRegex))) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__old--input-pass').classList.remove('invalid');
        getNodeClass('window__old--input-pass').classList.add('valid');

        console.log('VALID');
        console.log(str);
    } else {
        document.getElementById("error").innerHTML = 'wrong value';
        getNodeClass('window__old--input-pass').classList.add('invalid');
        getNodeClass('window__old--input-pass').classList.remove('valid');
        console.log('INVALID');
        console.log(str);
    };

    if (newPas.length > 5 && newPas.length < 20 && (!newPas.includes(loginRegex)) &&  str !== newPas && newPas === conf) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__new--input-pass').classList.add('valid');
        getNodeClass('window__new--input-pass').classList.remove('invalid');
        console.log('VALID');
        console.log(newPas);
    } else {
        document.getElementById("error").innerHTML = 'wrong value';
        getNodeClass('window__new--input-pass').classList.add('invalid');
        getNodeClass('window__new--input-pass').classList.remove('valid');
        console.log('INVALID');
        console.log(newPas);
    };


    if (conf.length > 5 && conf.length < 20 && (!conf.includes(loginRegex)) &&  str !== conf && newPas === conf) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__confirm--input-pass').classList.add('valid');
        getNodeClass('window__confirm--input-pass').classList.remove('invalid');
        console.log('VALID');
        console.log(conf);
    } else {
        document.getElementById("error").innerHTML = 'wrong value';
        getNodeClass('window__confirm--input-pass').classList.add('invalid');
        getNodeClass('window__confirm--input-pass').classList.remove('valid');
        console.log('INVALID');
        console.log(conf);
    }

}

function logValid() {
    const checkStr = ['a', 'b', 'c', 'd', 'e', 'f', 'd', 'e', '@', '1', '2', '3'];
    const oldLog = getNode('old-login').value;
    const newLog = getNode('new-login').value;

    if (oldLog.length > 6 && oldLog.length < 20 && (!oldLog.includes(checkStr)) &&  oldLog !== newLog) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__old--input-log').classList.add('valid');
        getNodeClass('window__old--input-log').classList.remove('invalid');
        console.log('VALID');
        console.log(oldLog);
    } else {
        document.getElementById("error").innerHTML = 'wrong value';
        getNodeClass('window__old--input-log').classList.add('invalid');
        getNodeClass('window__old--input-log').classList.remove('valid');
        console.log('INVALID');
        console.log(oldLog);
    }

    if (newLog.length > 6 && newLog.length < 20 && (!newLog.includes(checkStr)) &&  oldLog !== newLog) {
        document.getElementById("error").innerHTML = '';
        getNodeClass('window__new--input-log').classList.add('valid');
        getNodeClass('window__new--input-log').classList.remove('invalid');
        console.log('VALID');
        console.log(newLog);
    } else {
        document.getElementById("error").innerHTML = 'wrong value';
        getNodeClass('window__new--input-log').classList.add('invalid');
        getNodeClass('window__new--input-log').classList.remove('valid');
        console.log('INVALID');
        console.log(newLog);
    }

}

*/
