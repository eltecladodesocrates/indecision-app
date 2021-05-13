class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing Four']
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    render() {

        const title = 'Indecision App'
        const subTitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options  
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}    
                />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {


    handlePick() {
        alert('handlepcik')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick} disabled={!this.props.hasOptions} >What should I do</button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} optiontext={option}/>)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optiontext}
            </div>
        )
    }
}

class AddOption extends React.Component {

    handleAddOption(e) {
        e.preventDefault()
        if (e.target.option.value.trim()) {
            alert('Option Added')
        } else {
            alert('Add a vlue first')
        }
        e.target.option.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))