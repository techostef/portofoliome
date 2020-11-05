import React from "react"
import PropTypes from "prop-types"
import "./PortofolioFridItem.scss"

const PortofolioFridItem = (props) => {
    return (
        <div className="frid-item">
            <div className="frid-icon">
                {props.icon}
            </div>
            <div className="frid-label">
                {props.label}
            </div>
            <div className="frid-desc">
                {props.desc}
            </div>
        </div>
    )
}

PortofolioFridItem.propTypes = {
    icon: PropTypes.any,
    label: PropTypes.string,
    desc: PropTypes.string,
}

PortofolioFridItem.defaultProps = {
    icon: null,
    label: '',
    desc: '',
}

export default React.memo(PortofolioFridItem)