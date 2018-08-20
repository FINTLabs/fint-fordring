import {FETCH_ALL_CUSTOMER_GROUP_SUCCESS} from "../actions/types";

export default function allCustomerGroup(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_CUSTOMER_GROUP_SUCCESS:
            return {...state, allCustomerGroups: action.payload};
        default:
            return state;
    }
}
