const sendRequest = require('./requests')
const DataClass = require('./dataClass')

const claim = async (node) => {
  const data = new DataClass('legoWelt', null, null, node)
  const response = await sendRequest('claim', data)
  return response.Status
}

module.exports = claim
