import {BASEURL} from "./BASEURL";

class PaymentApi {

    static fetchPayments(orgId) {
        const url = BASEURL + '/payment';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        });
    }

    static getPaymentsByOrderNumber(orgId, number) {
        let url = new URL(BASEURL + '/payment/ordrenummer');
        let params = {'ordrenummer': number};
        url.search = new URLSearchParams(params);
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => Promise.all([result, result.json()]));
    }

    static getPaymentsByLastname(orgId, lastname) {
        let url = new URL(BASEURL + '/payment/navn');
        let params = {'etternavn': lastname};
        url.search = new URLSearchParams(params);

        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => Promise.all([result, result.json()]));
    }

    static setPayment(orgId, customer, fakturagrunnlag) {
        const request = new Request(BASEURL + '/payment/save',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    fakturagrunnlag: fakturagrunnlag,
                    kunde: customer
                })
            });

        return fetch(request).then(response => {
            return response.json()
        }).catch(error => {
            return error.json()
        });
    }

}

export default PaymentApi