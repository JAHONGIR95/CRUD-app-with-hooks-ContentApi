import React from 'react'
import { useHistory } from 'react-router'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


export const EditUser = () => {
    const history = useHistory()
    return (
        <Form>
            <FormGroup className="mb-3">
                <Label className="mb-2">Name</Label>
                <Input type="text" placeholder="Edit Name"></Input>
            </FormGroup>  
            <Button className="me-2" type="submit">Edit name</Button>
            <Button className="btn btn-danger" onClick={() => history.push('/')}>Cancel</Button>
        </Form>
    )
}
