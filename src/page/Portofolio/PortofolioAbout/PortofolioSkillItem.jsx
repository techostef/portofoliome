import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";
import { range } from "../../../helpers/dataHelpers"
import "./PortoFolioSkillItem.scss"


const PortofolioSkillItem = (props) => {
    const maxStar = 10

    const fullStar = useMemo(() => {
        return parseInt(props.star)
    }, [props.star])

    const halfStar = useMemo(() => {
        return parseInt(props.star % 1 / 0.5)
    }, [props.star])

    const emptyStar = useMemo(() => {
        return maxStar - fullStar + halfStar
    }, [props.star])

    return (
        <div className="portofolio-skill-item">
            <div className="item-label">
                {props.label}
            </div>
            <div className="item-star">
                {range(fullStar).map((item) => <MdStar className="active" key={`full-start-${item}`}/>)}
                {range(halfStar).map((item) => <MdStarHalf key={`half-start-${item}`}/>)}
                {range(emptyStar).map((item) => <MdStarBorder key={`empty-start-${item}`}/>)}
            </div>
            <div className="item-nilai">
                {fullStar}
            </div>
        </div>
    )
}

PortofolioSkillItem.propTypes = {
    label: PropTypes.string,
    star: PropTypes.number
}

export default React.memo(PortofolioSkillItem)