import {FETCH_EMPLOYERS_SUCCESS} from "../actions/types";

export default function employer(state = [], action) {
    switch (action.type) {
        case FETCH_EMPLOYERS_SUCCESS:
            return {...state, employers: action.payload};
        default:
            return state;
    }
}
