const sendRequest = require('./requests')
const DataClass = require('./dataClass')

const mine = async (node) => {
  const data = new DataClass('legoWelt', null, null, node)
  const response = await sendRequest('mine', data)
  return response
}

module.exports = mine
