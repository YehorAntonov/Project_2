import { getNode } from '../../../helper/utils';
import { closeModals } from '../showModals';
import { getData } from './getRouter';

export function postFunc(url, data) {
    fetch('/main/data', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response: Response) => {
        if (response.status === 200) {
            getData();
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function checkFieldCreate() {
    if (getNode('errorCreate').innerText === '') {
        const data = {
            firstName: getNode('nameCreate').value,
            lastName: getNode('lastCreate').value,
            age: getNode('ageCreate').value,
            city: getNode('cityCreate').value,
            phoneNumber: getNode('numberCreate').value,
            email: getNode('emailCreate').value,
            company: getNode('companyCreate').value,
            db: localStorage.getItem('databases')
        }
        postFunc('/main/data', data);
        closeModals(getNode('modalCreate'));
    }
}