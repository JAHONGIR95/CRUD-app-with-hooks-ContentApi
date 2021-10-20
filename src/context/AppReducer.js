import React from 'react'

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'remove_user':
            return {
                users: state.users.filter( user => {
                    return user.id !== action.payload
                })
            }

        case 'add_user':
            return {
                users: [ action.payload, ...state.users ]
            }
    
        default:
            return state;
    }
}

export default AppReducer;
