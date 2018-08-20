class EmployerApi {
    static fetchEmployers() {
        const url = '/api/oppdragsgiver';
        return fetch(url, {
            method: "GET",
        })
            .then(result => Promise.all([result, result.json()]))
            .catch(error => console.log(error));
    }
}

export default EmployerApi