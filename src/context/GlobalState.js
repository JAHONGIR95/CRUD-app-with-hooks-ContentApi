import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
    users: []
}

// create global context
export const GlobalContext = createContext(initialState)

// global provider
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( AppReducer , initialState )

    // action
    const removeUser = (id) => {
        dispatch({
            type: 'remove_user',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'add_user',
            payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'edit_user',
            payload: user
        })
    }
    
    
    

    return (
        <GlobalContext.Provider value={{ users: state.users, removeUser, addUser, editUser}}>
            { children }
        </GlobalContext.Provider>
    )
}
