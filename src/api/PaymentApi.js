class PaymentApi {

    static fetchPayments(orgId) {
        const url = '/payment';
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }

    static getPaymentsByOrderNumber(orgId, number) {
        let url = new URL('/payment/ordrenummer');
        let params = {'ordrenummer': number};
        url.search = new URLSearchParams(params);
        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }

    static getPaymentsByLastname(orgId, lastname) {
        let url = new URL('/payment/navn');
        let params = {'etternavn': lastname};
        url.search = new URLSearchParams(params);

        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }

    static setPayment(orgId, customers, orderLines, mvaCode, employer) {
        const request = new Request('/payment',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    mvaCode: mvaCode,
                    orderLines: orderLines,
                    customers: customers
                })
            });

        return fetch(request).then(response => {
            return response.json()
        }).catch(error => {
            return error
        });
    }

}

export default PaymentApi