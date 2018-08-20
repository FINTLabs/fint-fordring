import {FETCH_MVA_CODES_ERROR, FETCH_MVA_CODES_SUCCESS} from "./types";


export function fetchMvaCodesSuccess(payload) {
    return {type: FETCH_MVA_CODES_SUCCESS, payload}
}

export function fetchMvaCodesError() {
    return {type: FETCH_MVA_CODES_ERROR}
}











