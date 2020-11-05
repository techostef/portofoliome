import React from 'react'
import InputText from '../../../components/Input/InputText'
import InputTextArea from '../../../components/Input/InputTextArea'
import "./PortofolioFormContact.scss"
import { Button } from 'react-bootstrap'

const PortofolioFormContact = (props) => {
    return (
        <div className="portofolio-form-contact">
            <InputText placeholder="Name"/>
            <InputText placeholder="Email"/>
            <InputTextArea placeholder="Message"/>
            <Button>
                Submit
            </Button>
        </div>
    )
}

export default React.memo(PortofolioFormContact) 