class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.HandleAddOne = this.HandleAddOne.bind(this)
        this.HandleMinusOne = this.HandleMinusOne.bind(this)
        this.HandleReset = this.HandleReset.bind(this)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'), 10)
        this.setState(() => ({ count }))
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }

    }

    HandleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
            }
        }) 
    }

    HandleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }

    HandleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.HandleAddOne}>+1</button>
                <button onClick={this.HandleMinusOne}>-1</button>
                <button onClick={this.HandleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0

// const addOne = () => {
//     count++
//     renderCounterApp()
// }

// const minusOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
