'use strict';

var appRoot = document.querySelector('#app');
var hide = false;

var onDetails = function onDetails() {

    hide = !hide;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onDetails },
            hide ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            null,
            hide ? 'Here are some details' : ''
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
