
const appRoot = document.querySelector('#app')
let hide = false

const onDetails = () => {

    hide = !hide
    render()

}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onDetails}>{hide ? 'Hide details' : 'Show details'}</button>
            <p>{hide ? 'Here are some details' : ''}</p>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()