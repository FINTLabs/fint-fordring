class OrderLineApi {

    static fetchOrderLines() {
        const url = '/api/orderline';
        return fetch(url, {
            method: 'GET',
        })
            .then(result => Promise.all([result, result.json()]))
            .catch(error => console.log(error));
    }
}

export default OrderLineApi