import React from 'react'
import { useHistory } from 'react-router'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

export const UserList = () => {
    const history = useHistory()
    
    return (
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex align-items-center justify-content-between">
                <strong>User one</strong>
                <div>
                    <Button onClick={() => history.push('/edit/1')} className="me-2 btn btn-warning">Edit</Button>
                    <Button className="btn btn-danger">Delete</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    )
}
