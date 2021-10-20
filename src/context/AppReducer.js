
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
    
        case 'edit_user':
            const editedUser = action.payload
            const selectedUser = state.users.map(user => {
                if(user.id === editedUser.id){
                    return editedUser
                }
                return user
            })

            return {
                users: selectedUser
            }

        default:
            return state;
    }
}

export default AppReducer;
