import {FETCH_MVA_CODES_SUCCESS} from "../actions/types";

export default function mvaCode(state = [], action) {
    switch (action.type) {
        case FETCH_MVA_CODES_SUCCESS:
            return {...state, mvaCodes: action.payload};
        default:
            return state;
    }
}
