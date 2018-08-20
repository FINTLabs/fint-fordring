import {FETCH_ME_ERROR, FETCH_ME_SUCCESS} from "./types";


export function fetchMeSuccess(payload) {
    return {type: FETCH_ME_SUCCESS, payload}
}

export function fetchMeError() {
    return {type: FETCH_ME_ERROR}
}











