class Htpp {

    async get(url) {
        const response = await fetch(url)

        const responData = await response.json()

        return responData

    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(data)

        })

        const responseData = await response.json()

        return responseData
    }
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(data)

        })

        const responseData = await response.json()

        return responseData
    }
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })

        const responseData = await 'book delete'

        return responseData
    }

}

export const http = new Htpp()