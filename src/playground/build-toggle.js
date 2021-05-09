class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
            this.state = {
                visibility: false
            }
    }

    handleVisibility() {

        
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
            
        })
        
        
        
        
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                <p>{this.state.visibility ? 'Here are some details' : ''}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.querySelector('#app'))

// const appRoot = document.querySelector('#app')
// let hide = false

// const onDetails = () => {

//     hide = !hide
//     render()

// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onDetails}>{hide ? 'Hide details' : 'Show details'}</button>
//             <p>{hide ? 'Here are some details' : ''}</p>
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot)
// }

// render()