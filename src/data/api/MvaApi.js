class MvaApi {
    static fetchMvaCodes() {
        const url = '/api/mvakode';
        return fetch(url, {
            method: "GET",
        })
            .then(result => Promise.all([result, result.json()]))
            .catch(error => console.log(error));
    }
}

export default MvaApi