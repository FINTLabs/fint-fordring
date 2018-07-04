import {BASEURL} from "./BASEURL";

class OrderLineApi {

    static fetchOrderLines(orgId) {
        const url = BASEURL + '/orderline';
        return fetch(url, {
            method: 'GET',
            headers: new Headers({'x-org-id': orgId})
        }).then(result => Promise.all([result, result.json()]));
    }
}

export default OrderLineApi