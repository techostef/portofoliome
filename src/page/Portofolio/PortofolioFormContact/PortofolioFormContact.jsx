import React, { useState } from 'react'
import InputText from '../../../components/Input/InputText'
import InputTextArea from '../../../components/Input/InputTextArea'
import "./PortofolioFormContact.scss"
import { Button } from 'react-bootstrap'

const PortofolioFormContact = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const emailTo = () => {
        window.open(`mailto:tech88oky@gmail.com?subject='${name + ' ' +email}'&body='${message}'`);
    }
    
    return (
        <div className="portofolio-form-contact">
            <InputText placeholder="Name" onChange={(val) => setName(val)}/>
            <InputText placeholder="Email" onChange={(val) => setEmail(val)}/>
            <InputTextArea placeholder="Message" onChange={(val) => setMessage(val)}/>
            <Button onClick={() => emailTo()}>
                Submit
            </Button>
        </div>
    )
}

export default React.memo(PortofolioFormContact) 