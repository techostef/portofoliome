import React from "react"
import PropTypes from "prop-types"
import "./InputTextArea.scss"

const InputTextArea = (props) => {
    return (
        <div className="container-input-text-area">
            <div className="label-content">
                {props.label}
            </div>
            <div className="input-content">
                <textarea placeholder={props.placeholder}></textarea>
            </div>
        </div>
    )
}

InputTextArea.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
}

export default React.memo(InputTextArea)