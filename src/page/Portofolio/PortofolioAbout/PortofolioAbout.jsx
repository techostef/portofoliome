import React from "react"
import "./PortofolioAbout.scss"
import PortofolioFridItem from "./PortofolioFridItem"
import { MdDevices, MdToys, MdFlashOn, MdStar } from "react-icons/md";
import PortofolioSkill from "./PortofolioSkill";
import PortofolioTitle from "../PortofolioTitle";

const PortofolioAbout = (props) => {
    return (
        <div className="portofolio-about">
            <PortofolioTitle title={"About"}/>
            <div className="frid-container">
                <PortofolioFridItem
                    icon={<MdFlashOn/>}
                    label="Fast"
                    desc="Fast load times and lag free interaction, my highest priority."
                />
                <PortofolioFridItem
                    icon={<MdDevices/>}
                    label="Responsive"
                    desc="My layouts will work on any device, big or small."
                />
                <PortofolioFridItem
                    icon={<MdToys/>}
                    label="Intuitive"
                    desc="Strong preference for easy to use, intuitive UX/UI."
                />
                <PortofolioFridItem
                    icon={<MdStar/>}
                    label="Dynamic"
                    desc="Websites don't have to be static, I love making pages come to life."
                />
            </div>
            <PortofolioSkill/>
        </div>
    )
}

export default React.memo(PortofolioAbout)