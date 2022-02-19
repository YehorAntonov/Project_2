import { getNode, getNodeClass, setHTMLValue } from './../../../helper/utils';

export function validate(e) {
    const regNames =  /^([А-Я]{1}[а-яё]{2,19}$|[A-Z]{1}[a-z]{2,19})$/;
    const regPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    switch(e.target.id){
        case 'nameCreate':
            isValidation(regNames, getNode('nameCreate'), getNodeClass('window__first--input'), 'Wrong value! Check your First Name');
            break;
        case 'lastCreate':
            isValidation(regNames, getNode('lastCreate'), getNodeClass('window__last--input'), 'Wrong value! Check your Last Name');
            break;
        case 'cityCreate':
            isValidation(regNames, getNode('cityCreate'), getNodeClass('window__city--input'), 'Wrong value! Check name of City');
            break;
        case 'companyCreate':
            isValidation(regNames, getNode('companyCreate'), getNodeClass('window__company--input'), 'Wrong value! Check name of your company');
            break;
        case 'ageCreate':
            validAge(getNode('ageCreate'), getNodeClass('window__age--input'), 'Wrong value! Check your Age');
            break;
        case 'numberCreate':
            isValidation(regPhone, getNode('numberCreate'), getNodeClass('window__number--input'), 'Wrong value! Check number of your phone');
            break;
        case 'emailCreate':
            isValidation(regEmail, getNode('emailCreate'),  getNodeClass('window__email--input'), 'Wrong value! Check your e-mail');
            break;
        default: return;
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
