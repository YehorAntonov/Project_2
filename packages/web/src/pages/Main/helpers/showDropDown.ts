export function showDatabases(arrowDb, mongoDB, sectionDB, e) {
    if (e.target.id === 'db') {
        showDb(arrowDb, mongoDB, sectionDB);
    } else if (e.target.id === 'mongoDB') {
        closeDb(arrowDb, mongoDB, sectionDB);
    } else {
        closeDb(arrowDb, mongoDB, sectionDB);
    }
}

export function showSorting(arrow, fields, section, e) {
    if (e.target.id === 'sorting') {
        showDb(arrow, fields, section);
    } else if (e.target.id === 'fields') {
        closeDb(arrow, fields, section);
    } else {
        closeDb(arrow, fields, section);
    }
}

function showDb(arrow, fields, section) {
    arrow.classList.add('rotateArrow');
    fields.classList.add('show-dropdown');
    section.classList.add('changeHeigth');
}

function closeDb(arrow, mongoDB, sectionDB) {
    arrow.classList.remove('rotateArrow');
    mongoDB.classList.remove('show-dropdown');
    sectionDB.classList.remove('changeHeigth');
}
