

const reducer = (state, action) =>{
    throw new Error(`no action: ${action.type}`)
}

export default reducer