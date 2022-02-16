function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}

function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
    }
    return false;
}

function getNodeClass(selector) {
    const node = document.querySelector(`.${selector}`);
    if (node) {
        return node;
    }
    return false;
}

function getNodeAllClass(selector) {
    const node = document.querySelectorAll(`.${selector}`);
    if (node) {
        return node;
    }
    return false;
}

function getNodeSelectorAll(selector) {
    const node = document.querySelectorAll(`[${selector}]`);
    if (node) {
        return node;
    }
    return false;
}

function inputValueGet(id) {
    const input = document.getElementById(id);
    if (input) {
        return input.value;
    }
    return '';
}

function disabledElemement(id, boolean) {
    const input = document.getElementById(id);
    if (input) {
        return input.disabled = boolean;
    }
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id)
    if (node) {
        node.addEventListener(eventType, cb)
        return true
    }
    return false
}

module.exports = { setHTMLValue, addListener, inputValueGet, getNode, getNodeAllClass, getNodeSelectorAll, getNodeClass, disabledElemement };
