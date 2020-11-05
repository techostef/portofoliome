import React from "react"
import PropTypes from "prop-types"
import "./InputText.scss"

const InputText = (props) => {
    return (
        <div className="container-input-text">
            <div className="label-content">
                {props.label}
            </div>
            <div className="input-content">
                <input placeholder={props.placeholder}></input>
            </div>
        </div>
    )
}

InputText.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
}

export default React.memo(InputText)