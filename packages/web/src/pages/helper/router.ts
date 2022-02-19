import { getNode } from './utils';

export function postFunc(url) {
    const data = {
        login: getNode('login').value,
        password: getNode('password').value,
        // confirmPassword: getNode('password-confirm').value
    }
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
            window.location.href = response.url;
        }
    }).catch((err) => {
        console.log(err);
    })
}