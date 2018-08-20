import {FETCH_CUSTOMER_ERROR, FETCH_CUSTOMER_SUCCESS} from "./types";


export function fetchCostumersSuccess(payload) {
    return {type: FETCH_CUSTOMER_SUCCESS, payload}
}

export function fetchCostumersError() {
    return {type: FETCH_CUSTOMER_ERROR}
}











