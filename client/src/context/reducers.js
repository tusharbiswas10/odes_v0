
import { DISPLAY_ALERT } from "./actions"

const reducer = (state, action) =>{
    if(action.type === DISPLAY_ALERT){
        return {
             ...state,
             showAlert:true,
             alertType:'danger',
            alertText:'Please provide all information '}
    }
    throw new Error(`no action: ${action.type}`)
}

export default reducer