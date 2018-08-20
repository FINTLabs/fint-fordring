import {FETCH_ORDER_LINES_ERROR, FETCH_ORDER_LINES_SUCCESS} from "./types";


export function fetchOrderLinsesSuccess(payload) {
    return {type: FETCH_ORDER_LINES_SUCCESS, payload}
}

export function fetchOrderLinesError() {
    return {type: FETCH_ORDER_LINES_ERROR}
}











