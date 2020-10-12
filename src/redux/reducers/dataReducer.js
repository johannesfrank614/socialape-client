import { SET_SCREAMS, LIKE_SCREAM, UNLIKE_SCREAM, LOADING_DATA, DELETE_SCREAM} from '../types'

const initialState = {
    screams: [],
    scream: {},
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_SCREAMS:
            return{
                ...state,
                screams: action.payload,
                loading: false
            }
        case UNLIKE_SCREAM:
        case LIKE_SCREAM:
            let unlike_index = state.screams.findIndex((scream)=>scream.screamId === action.payload.screamId )
            state.screams[unlike_index] = action.payload
            return {
                ...state
            }
        case DELETE_SCREAM:
            let delete_index = state.screams.findIndex(scream=>scream.screamId === action.payload)
            state.screams.splice(delete_index, 1)
            return {
                ...state
            }
        default:
            return state
    }
}