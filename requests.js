const axios = require('axios')
const host = 'https://headlight-tournament-4.herokuapp.com'

const sendRequest = async (endPoint, data) => {
  try {
    const response = await axios.post(`${host}/${endPoint}`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendRequest
