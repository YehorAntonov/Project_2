import { getNode } from '../../../helper/utils';
import { closeModals } from '../showModals';
import { getData } from './getRouter';

export function putFunc(url, data) {
    console.log(data);
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response: Response) => {
        if (response.status === 200) {
            console.log(response);
            getData('/main');
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function checkFieldUpdate() {
    if (getNode('errorUpdate').innerText === '') {
        const data = {
            firstName: getNode('nameUpdate').value,
            lastName: getNode('lastUpdate').value,
            age: getNode('ageUpdate').value,
            city: getNode('cityUpdate').value,
            phoneNumber: getNode('numberUpdate').value,
            email: getNode('emailUpdate').value,
            company: getNode('companyUpdate').value,
        }
        putFunc('/main', data);
        closeModals(getNode('modalCreate'));
    }
}