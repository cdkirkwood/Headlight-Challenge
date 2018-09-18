const register = require('./register')
const scan = require('./scan')
const { moveTen } = require('./move')
const claim = require('./claim')
const mine = require('./mine')
const release = require('./release')

const runBot = async() => {
  const initialStatus = await register()
  console.log('initial status', initialStatus)
  const { X, Y } = initialStatus.Location
  await moveTen(X, Y)
  const nodes = await scan()
  const collected = []
  for (let i = 0; i < nodes.length; i++) {
    const curNodeId = nodes[i].Id
    await claim(curNodeId)
    let minedClaim
    let numTimesMined = 0
    while (numTimesMined < nodes[i].Value) {
      minedClaim = await mine(curNodeId)
      numTimesMined++
    }
    await release(curNodeId)
    collected.push(minedClaim)
  }
  console.log('collected', collected)
}
runBot().then(() => console.log('done'))
