import {FETCH_CUSTOMER_SUCCESS} from "../actions/types";

export default function customer(state = [], action) {
    switch (action.type) {
        case FETCH_CUSTOMER_SUCCESS:
            return {...state, customers: action.payload};
        default:
            return state;
    }
}
