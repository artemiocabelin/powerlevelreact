import { SET_POWER } from '../actions';

export default function(state = 0, action) {
    switch(action.type) {
        case SET_POWER:
            return action.payload;
        
        default:
            return state;
    }
}