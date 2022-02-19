import { getNode } from '../../../helper/utils';
import { getData } from './routerGet';

export function postFunc(url, data) {
    console.log(data);
    fetch(url, {
        method: 'POST',
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

export function checkFieldError() {
    if (getNode('errorCreate').innerText === '') {
        const data = {
            firstName: getNode('nameCreate').value,
            lastName: getNode('lastCreate').value,
            age: getNode('ageCreate').value,
            city: getNode('cityCreate').value,
            phoneNumber: getNode('numberCreate').value,
            email: getNode('emailCreate').value,
            company: getNode('companyCreate').value,
        }
        postFunc('/main', data);
    }
}