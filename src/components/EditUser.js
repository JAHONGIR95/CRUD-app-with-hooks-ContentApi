import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'


export const EditUser = ({match}) => {
    const history = useHistory()
    const { users, editUser } = useContext(GlobalContext)
    const currentUserId = match.params.id
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })

    useEffect(() => {
        const userId = currentUserId
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/')
    }

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
      
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup className="mb-3">
                <Label className="mb-2">Name</Label>
                <Input value={selectedUser.name} name="name" onChange={onChange} type="text" placeholder="Edit Name"></Input>
            </FormGroup>  
            <Button className="me-2" type="submit">Edit name</Button>
            <Button className="btn btn-danger" onClick={() => history.push('/')}>Cancel</Button>
        </Form>
    )
}
