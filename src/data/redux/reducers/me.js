import {FETCH_ME_SUCCESS} from "../actions/types";

export default function me(state = [], action) {
    switch (action.type) {
        case FETCH_ME_SUCCESS:
            return {...state, me: action.payload};
        default:
            return state;
    }
}
