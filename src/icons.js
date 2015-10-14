var iconNames = [
    'angry',
    'baffled',
    'confused',
    'cool',
    'crying',
    'evil',
    'frustrated',
    'grin',
    'happy',
    'hipster',
    'neutral',
    'sad',
    'shocked',
    'sleepy',
    'smile',
    'tongue',
    'wink',
    'wondering'
];

var icons = {};

iconNames.forEach(function(name) {
    icons[name] = require('../icons/' + name + '.svg');
});

var iconPrototype = Object.create(HTMLElement.prototype);

iconPrototype.createdCallback = function() {
    this.innerHTML = icons[this.getAttribute('type')] || '';
};

iconPrototype.attributeChangedCallback = function(name, previousValue, value) {
    if (name === 'type') {
        this.innerHTML = icons[this.getAttribute('type')] || '';
    }
};

document.registerElement('x-icon', { prototype: iconPrototype });
