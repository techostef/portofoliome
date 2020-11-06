import React from  'react'
import { scrollAnimation } from '../../helpers/scrollHelpers'
import "./PortofolioHeader.scss"

const PortofolioHeader = (props) => {
    const scrollTo = (positionTop) => {
        if (props.containerRef && props.containerRef.current)
            scrollAnimation(props.containerRef, positionTop)
    }
    return (
        <div className="protofolio-header">
            <div className="item-header" onClick={() => scrollTo(0)}>
                HOME
            </div>
            <div className="item-header" onClick={() => scrollTo(800)}>
                ABOUT
            </div>
            <div className="item-header" onClick={() => scrollTo(1900)}>
                CONTACT
            </div>
        </div>
    )
}

export default React.memo(PortofolioHeader)