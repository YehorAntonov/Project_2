// import { getNode } from '../../../helper/utils';

import { render } from "../render";

export function getData(url) {
    fetch(url, {
        method: 'GET',
        body: JSON.stringify({db: 'mySql'}), //add field localstorage
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            return res.json();
        }).then((data) => {
            render(data);
        })
}