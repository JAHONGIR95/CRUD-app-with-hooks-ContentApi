import React from 'react'
import { useHistory } from 'react-router'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export const AddUser = () => {
    const history = useHistory()
    
    return (
        <Form>
            <FormGroup className="my-3">
                <Label className="mb-2">Name</Label>
                <Input type="text" placeholder="Enter Name" />
            </FormGroup>
            <Button type="submit" className="me-2">Submit</Button>
            <Button onClick={() => history.push('/')} className="btn btn-danger">Cancel</Button>
        </Form>
    )
}
