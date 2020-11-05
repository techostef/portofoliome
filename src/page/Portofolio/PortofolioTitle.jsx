import React from 'react'
import PropTypes from 'prop-types'
import './PortofolioTitle.scss'

const PortofolioTitle = (props) => {
    return (
        <div className="title-container">
            <div className="title-content">
                {props.title}
                <div className="title-underline"></div>
            </div>
        </div>
    )
}

PortofolioTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default React.memo(PortofolioTitle)