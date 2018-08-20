import {FETCH_DATES_ERROR, FETCH_DATES_SUCCESS} from "./types";

export function fetchDatesSuccess(payload) {
    return {type: FETCH_DATES_SUCCESS, payload}
}

export function fetchDatesError() {
    return {type: FETCH_DATES_ERROR}
}











