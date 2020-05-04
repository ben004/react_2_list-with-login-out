export const getUser = (state) =>{
    let userName= state[state.length-1].user
    return userName
}
export const getPassword = (state) =>{
    return state[state.length-1].password
}
export const profile = (state) =>{
    let profile =state[state.length-1].profile
    return profile
}
