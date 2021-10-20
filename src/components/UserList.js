import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'

export const UserList = () => {
    const history = useHistory()
    const { users, removeUser } = useContext(GlobalContext)

    return (
        <ListGroup className="mt-4">
            {
                users.map(user => (
                    <ListGroupItem key={user.id} className="d-flex align-items-center justify-content-between">
                        <strong>{user.name}</strong>
                        <div>
                            <Button onClick={() => history.push(`/edit/${user.id}`)} className="me-2 btn btn-warning">Edit</Button>
                            <Button onClick={() => removeUser(user.id)} className="btn btn-danger">Delete</Button>
                        </div>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
}
