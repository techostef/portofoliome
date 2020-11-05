import React from "react"
import PortofolioSkillItem from "./PortofolioSkillItem"
import me from "../../../assets/images/me.jpg"
import "./PortofolioSkill.scss"

const PortofolioSkill = (about) => {
    return (
        <div className="skill-container">
            <div className="who-am-i">
                <div>
                    <img className="pic" src={me}></img>
                    <div className="title">
                        Who's this guy?
                    </div>
                    <div className="desc">
                        I'm a Front-End Developer for Formulatrix in Salatiga, Indonesia. <br/>
                        I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. <br/>
                        Let's make something special.
                    </div>
                </div>
            </div>
            <div className="skill-content">
                <PortofolioSkillItem label="CSS" star={9}/>
                <PortofolioSkillItem label="SCSS" star={9}/>
                <PortofolioSkillItem label="HTML" star={9}/>
                <PortofolioSkillItem label="JAVASCRIPT" star={9}/>
                <PortofolioSkillItem label="REACT JS" star={9}/>
                <PortofolioSkillItem label="VUE JS" star={8}/>
                <PortofolioSkillItem label="JQUERY" star={7}/>
                <PortofolioSkillItem label="NODE JS" star={7}/>
                <PortofolioSkillItem label="WEBRTC" star={6}/>
                <PortofolioSkillItem label="C++" star={5}/>
            </div>
        </div>
    )
}

export default React.memo(PortofolioSkill)