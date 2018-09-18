const sendRequest = require('./requests')
const DataClass = require('./dataClass')

const register = async () => {
  const data = new DataClass('legoWelt')
  const response = await sendRequest('register', data)
  return response.Status
}

module.exports = register
