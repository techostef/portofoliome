import React from 'react'
import './PortofolioMe.scss'
import { ReactComponent as AvatarIcon} from '../../images/Avatar.svg'
import { Button } from "react-bootstrap"
import { scrollAnimation } from '../../helpers/scrollHelpers'

const PortolioMe = (props) => {
    const scrollTo = () => {
        if (props.containerRef && props.containerRef.current)
            scrollAnimation(props.containerRef, 800)
    }
    return (
        <div className="portofolio-me">
            <div className="hello">
                Hello, I'm Oky Dwi Hartanto.
            </div>
            <div className="title">
                Front-end & Back-end Developer
            </div>
            <div className="about">
                I manage data and code beautifully simple things, and I love what I do.
            </div>
            <div className="mt-8">
                <AvatarIcon/>
            </div>
            <div className="mt-8">
                <Button className="btn-about-me" onClick={scrollTo}>
                    About Me
                </Button>
            </div>
        </div>
    )
}

export default React.memo(PortolioMe)