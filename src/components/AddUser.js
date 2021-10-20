import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import {v4 as uuid} from 'uuid'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'

export const AddUser = () => {
    const [name, setName] = useState('')
    const history = useHistory()
    const { addUser } = useContext(GlobalContext)

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser)
        history.push('/')
    }

    const getName = (e) => {
        setName(e.target.value)
    }
    
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup className="my-3">
                <Label className="mb-2">Name</Label>
                <Input value={name} onChange={getName} type="text" placeholder="Enter Name" />
            </FormGroup>
            <Button type="submit" className="me-2">Submit</Button>
            <Button onClick={() => history.push('/')} className="btn btn-danger">Cancel</Button>
        </Form>
    )
}
