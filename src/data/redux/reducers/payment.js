import {FETCH_PAYMENT_SUCCESS} from "../actions/types";

export default function payment(state = [], action) {
    switch (action.type) {
        case FETCH_PAYMENT_SUCCESS:
            return {...state, payments: action.payload};
        default:
            return state;
    }
}
