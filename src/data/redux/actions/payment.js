import {FETCH_PAYMENT_ERROR, FETCH_PAYMENT_SUCCESS} from "./types";


export function fetchPaymentsSuccess(payload) {
    return {type: FETCH_PAYMENT_SUCCESS, payload}
}

export function fetchPaymentsError() {
    return {type: FETCH_PAYMENT_ERROR}
}











