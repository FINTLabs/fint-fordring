import {FETCH_EMPLOYERS_ERROR, FETCH_EMPLOYERS_SUCCESS} from "./types";


export function fetchEmployersSuccess(payload) {
    return {type: FETCH_EMPLOYERS_SUCCESS, payload}
}

export function fetchEmployersError() {
    return {type: FETCH_EMPLOYERS_ERROR}
}











