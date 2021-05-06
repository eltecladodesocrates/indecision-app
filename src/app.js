console.log('App.js is running')

// JSX - JavaScript XML

const text = {
    title: 'Anibal contra el mundo',
    subTitle: 'El baston de la urbe',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{text.title}</h1>
        {text.subTitle && <p>{text.subTitle}</p>}
        <p>{text.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

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

let count = 0

const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()