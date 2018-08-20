import {FETCH_ORDER_LINES_SUCCESS} from "../actions/types";

export default function orderLine(state = [], action) {
    switch (action.type) {
        case FETCH_ORDER_LINES_SUCCESS:
            return {...state, orderLines: action.payload};
        default:
            return state;
    }
}
