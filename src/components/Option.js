import React from 'react'

const Option = (props) => {
    return (
        <div>
            {props.optiontext}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optiontext)
                }}
            >
                Remove
            </button>
        </div>
    )
}

export default Option