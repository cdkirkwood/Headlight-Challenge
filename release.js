const sendRequest = require('./requests')
const DataClass = require('./dataClass')

const release = async (node) => {
  const data = new DataClass('legoWelt', null, null, node)
  const response = await sendRequest('release', data)
  return response
}

module.exports = release
