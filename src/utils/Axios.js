const Axios = require('axios')

const intence = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`
})

module.exports = intence