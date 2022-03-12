function createElement(tag, attrs, appendTo) {
    var element = document.createElement(tag);
    for (var attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
    }
    // insert element to DOM as last child
    if (appendTo === undefined) {
        document.body.appendChild(element);}
    else {
        appendTo.appendChild(element);}
    return element;
    
}

function createLocalRecords(config) {

    console.log('Testing local records');

    // create div as container for map
    createElement('div', {id: 'map'});
    var story = createElement('div', {id: 'story'});
    createElement('div', {id: 'features'}, story);

    // Cria container para cada chapter
    config.chapters.forEach((record, idx) => {
        var container = document.createElement('div');
        container.setAttribute('id', record.id);

        container.classList.add('section-template');
        if (idx === 0) {
            container.classList.add('active');
        }

        features.appendChild(container);
    })
};

