// export function setHTMLValue(id, value) {
//     const node = document.getElementById(id);
//     if (node) {
//         node.innerHTML = value;
//         return true;
//     }
//     return false;
// }

export function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
    }
    return false;
}

// export function getNodeClass(selector) {
//     const node = document.querySelector(`.${selector}`);
//     if (node) {
//         return node;
//     }
//     return false;
// }

// export function getSelectorAttribute(selector) {
//     const node = document.querySelector(`[${selector}]`);
//     if (node) {
//         return node;
//     }
//     return false;
// }

// export function getNodeAllClass(selector) {
//     const node = document.querySelectorAll(`.${selector}`);
//     if (node) {
//         return node;
//     }
//     return false;
// }

// export function getNodeSelectorAll(selector) {
//     const node = document.querySelectorAll(`[${selector}]`);
//     if (node) {
//         return node;
//     }
//     return false;
// }

// export function inputValueGet(id) {
//     const input = document.getElementById(id);
//     if (input) {
//         return input.value;
//     }
//     return '';
// }

// export function disabledElemement(id, boolean) {
//     const input = document.getElementById(id);
//     if (input) {
//         //@ts-ignore
//         return input.disabled = boolean;
//     }
// }

export function addListener(id, eventType, cb) {
    const node = document.getElementById(id)
    if (node) {
        node.addEventListener(eventType, cb)
        return true
    }
    return false
}

// export function addListenerHelper(node, eventType, cb) {
//     node.addEventListener(eventType, cb);
// }