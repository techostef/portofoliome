import React from  'react'
import "./PortofolioHeader.scss"

const PortofolioHeader = (props) => {
    return (
        <div className="protofolio-header">
            <div className="item-header">
                HOME
            </div>
            <div className="item-header">
                ABOUT
            </div>
            <div className="item-header">
                CONTACT
            </div>
        </div>
    )
}

export default React.memo(PortofolioHeader)