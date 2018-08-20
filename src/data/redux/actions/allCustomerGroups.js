import {FETCH_ALL_CUSTOMER_GROUP_ERROR, FETCH_ALL_CUSTOMER_GROUP_SUCCESS} from "./types";


export function fetchAllCustomerGroupsSuccess(payload) {
    return {type: FETCH_ALL_CUSTOMER_GROUP_SUCCESS, payload}
}

export function fetchAllCustomerGroupsError() {
    return {type: FETCH_ALL_CUSTOMER_GROUP_ERROR}
}











