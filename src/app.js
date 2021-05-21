// import isSenior, { isAdult, canDrink } from './person'

// console.log(isAdult(18))
// console.log(canDrink(21))
// console.log(isSenior(50));


// import './utilis'
// import substract, { square, add } from './utilis'

// console.log('app.js is running!!')
// console.log(square(4))
// console.log(add(20, 80))
// console.log(substract(5, 3));

// import validator from 'validator'

import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

// ReactDOM.render(<User name="Andrew" age={30}/>, document.getElementById('app'))
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

///////////////////// Children to component ///////////////////////////

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )

// ReactDOM.render((
//     <Layout>
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
//     </Layout>
//     ), document.getElementById('app'))
