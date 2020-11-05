import React from "react"
import PortofolioFormContact from "../PortofolioFormContact/PortofolioFormContact"
import PortofolioTitle from "../PortofolioTitle"
import "./PortofolioFooter.scss"

const PortofolioFooter = (props) => {
    return (
        <div className="portofolio-footer">
            <PortofolioTitle title="CONTACT"/>
            <PortofolioFormContact/>
        </div>
    )
}

export default React.memo(PortofolioFooter)