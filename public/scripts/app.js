'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var text = {
    title: 'Anibal contra el mundo',
    subTitle: 'El baston de la urbe',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        text.title
    ),
    text.subTitle && React.createElement(
        'p',
        null,
        text.subTitle
    ),
    React.createElement(
        'p',
        null,
        text.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

// const user = {
//     name: `D'artagnan`,
//     age: 20,
//     location: 'New Jersey'
// }

// const getLocation = (location) => {

//     if (location) {
//         return <p>Location: {location}</p>
//     } else {
//         return undefined
//     }

// }
// const templateTwo = (   
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
