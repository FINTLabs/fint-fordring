import {FETCH_DATES_SUCCESS} from "../actions/types";

export default function date(state = [], action) {
    switch (action.type) {
        case FETCH_DATES_SUCCESS:
            return {...state, dates: action.payload};
        default:
            return state;
    }
}
