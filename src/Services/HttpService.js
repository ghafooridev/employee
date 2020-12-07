import axios from "axios"

export default {
    get(options) {
        return axios
            .get(options.url)
            .then((response) => {
                return Promise.resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                return Promise.reject(error)
            })
    }
}
