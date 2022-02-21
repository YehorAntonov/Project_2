import { render } from "../render";

export function getData() {
    fetch(`/main/data/get`, {
        method: 'POST',
        body: JSON.stringify({db: localStorage.getItem('databases')}),
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
