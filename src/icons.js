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
    icons[name.toLowerCase()] = require('../icons/' + name + '.svg');
});

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
    this.innerHTML = icons[('' + this.getAttribute('type')).toLowerCase()];
};

proto.attributeChangedCallback = function(attributeName, previousValue, value) {
    if (attributeName === 'type') {
        this.innerHTML = icons[('' + this.getAttribute('type')).toLowerCase()];
    }
};

document.registerElement('x-icon', { prototype: proto });
