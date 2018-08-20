class DateApi {
    static fetchDates() {
        const url = '/api/dato';
        return fetch(url, {
            method: "GET",
        })
            .then(result => Promise.all([result, result.json()]))
            .catch(error => console.log(error));
    }
}

export default DateApi