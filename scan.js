const sendRequest = require('./requests')
const DataClass = require('./dataClass')

const scan = async() => {
  const data = new DataClass('legoWelt')
  const response = await sendRequest('scan', data)
  return response.Nodes
}

module.exports = scan
