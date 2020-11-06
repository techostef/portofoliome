import React from "react"
import PortofolioFormContact from "../PortofolioFormContact/PortofolioFormContact"
import PortofolioTitle from "../PortofolioTitle"
import "./PortofolioFooter.scss"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";


const PortofolioFooter = (props) => {
    const linkTo = (link) => {
        window.open(link, '_blank')
    }
    return (
        <div className="portofolio-footer">
            <PortofolioTitle title="CONTACT"/>
            <PortofolioFormContact/>
            <div className="icons-container">
                <div className="ico">
                    <div className="icon-item" onClick={() => linkTo('https://www.linkedin.com/in/oky-dwi-hartanto-45726a11b/')}>
                        <IoLogoLinkedin/>
                    </div>
                    <div className="icon-item" onClick={() => linkTo('https://github.com/techostef')}>
                        <IoLogoGithub/>
                    </div>
                </div>
                <div className="text">
                    OKY DWI HARTANTO @2020
                </div>
            </div>
            
        </div>
    )
}

export default React.memo(PortofolioFooter)