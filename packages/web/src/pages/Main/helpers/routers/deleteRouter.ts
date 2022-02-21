import { getNode } from "../../../helper/utils";
import { closeModals } from "../showModals";
import { getData } from "./getRouter";

export function clearAllRouter() {
    fetch('/main/data', {
        method: 'DELETE',
        body: JSON.stringify({db: localStorage.getItem('databases'), truncate: true}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {
            closeModals(getNode('modalClear'));
            getData();
        })
        .catch((err) => {
            console.log(err);
        })
   
}
