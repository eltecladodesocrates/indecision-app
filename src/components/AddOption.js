import React from 'react'

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        e.target.option.value = ''
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input autoComplete="off" type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

