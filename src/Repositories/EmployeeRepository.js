import api from "../Services/HttpService"

export const getEmployees = function () {
    try {
        return api.get({
            url: "http://dummy.restapiexample.com/api/v1/employees",
        })
    } catch (error) {
        // throw new TypeError(error)
    }
}