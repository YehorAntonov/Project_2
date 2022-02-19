import { getNode } from "../../../helper/utils";
import { closeModals } from "../showModals";
import { getData } from "./getRouter";

export function deleteRouter(url) {
    console.log('delte');
    fetch(url, {
        method: 'DELETE',
    }).then((response: Response) => {
        if (response.status === 200) {
            console.log(response);
            // closeModals(getNode('modalCreate'));
            closeModals(getNode('modalClear'));
            // getData('/main');
            getData(url);
        }
    }).catch((err) => {
        closeModals(getNode('modalClear'));
        console.log(err);
    })
}