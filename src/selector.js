export const getUser = (state) =>{
    return state[state.length-1].user
}
export const getPassword = (state) =>{
    return state[state.length-1].password
}
