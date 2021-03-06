class PaymentApi {

    static fetchPayments(orgId) {
        const url = '/api/payment';
        return fetch(url, {
            method: "GET",
            credentials: 'same-origin',
            //headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        }).catch(
            error => {
                console.log(error)
            }
        );
    }

    static getPaymentsByOrderNumber(orgId, number) {
        let url = new URL('/api/payment/ordrenummer');
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
        let url = new URL('/api/payment/navn');
        let params = {'etternavn': lastname};
        url.search = new URLSearchParams(params);

        return fetch(url, {
            method: "GET",
            headers: new Headers({'x-org-id': orgId})
        }).then(result => {
            return result.json();
        }).catch(error => console.log(error));
    }

    static setPayment(orgId, customers, orderLines, mvaCode, employer, timeFrameDueDate) {
        const request = new Request('/api/payment',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-org-id': orgId
                }),
                body: JSON.stringify({
                    mvaCode: mvaCode,
                    orderLines: orderLines,
                    customers: customers,
                    employer: employer,
                    timeFrameDueDate: timeFrameDueDate,
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