import { getNode } from '../../../helper/utils';
import { closeModals } from '../showModals';
import { getData } from './getRouter';

export function settingSRouter(url, data) {
    console.log(url);
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response: Response) => {
        if (response.status === 200) {
            console.log(response);
        }
    }).catch((err) => {
        console.log(err);
    })
}

export function checkFieldSetting() {

    //добавить валидацию
    const data = {

    }

    settingSRouter('/main/settings', data);
}