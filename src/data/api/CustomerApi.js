class CustomerApi {

    static fetchCustomers() {
        const url = '/api/customer';

        return fetch(url, {
            method: "GET",
        })
            .then(result => Promise.all([result, result.json()]))
            .catch(error => console.log(error));
    }
}

export default CustomerApi