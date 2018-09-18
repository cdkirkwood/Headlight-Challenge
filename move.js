const sendRequest = require('./requests')
const DataClass = require('./dataClass')
const register = require('./register')
const scan = require('./scan')

const moveRight = async (curXPosition, curYPosition) => {
  let moves = 0
  let newXPosition = curXPosition
  let newYPosition = curYPosition
  let finalPosition
  while (moves <= 10 && newXPosition < 100) {
    newXPosition++
    const data = new DataClass('legoWelt', newXPosition.toString(), newYPosition.toString())
    try {
      const response = await sendRequest('move', data)
      finalPosition = response
    } catch (error) {
      break
    }
    moves++
  }
  return finalPosition
}

const moveLeft = async (curXPosition, curYPosition) => {
  let moves = 0
  let newXPosition = curXPosition
  let newYPosition = curYPosition
  let finalPosition
  while (moves <= 10 && newXPosition > 0) {
    newXPosition--
    const data = new DataClass('legoWelt', newXPosition.toString(), newYPosition.toString())
    try {
      const response = await sendRequest('move', data)
      finalPosition = response
    } catch (error) {
      break
    }
    moves++
  }
  return finalPosition
}

const moveUp = async (curXPosition, curYPosition) => {
  let moves = 0
  let newXPosition = curXPosition
  let newYPosition = curYPosition
  let finalPosition
  while (moves <= 10 && newYPosition < 100) {
    newYPosition++
    const data = new DataClass('legoWelt', newXPosition.toString(), newYPosition.toString())
    try {
      const response = await sendRequest('move', data)
      finalPosition = response
    } catch (error) {
      break
    }
    moves++
  }
  return finalPosition
}

const moveDown = async (curXPosition, curYPosition) => {
  let moves = 0
  let newXPosition = curXPosition
  let newYPosition = curYPosition
  let finalPosition
  while (moves <= 10 && newYPosition > 0) {
    newYPosition--
    const data = new DataClass('legoWelt', newXPosition.toString(), newYPosition.toString())
    try {
      const response = await sendRequest('move', data)
      finalPosition = response
    } catch (error) {
      break
    }
    moves++
  }
  return finalPosition
}

const moveTen = async (curXPosition, curYPosition) => {
  let moves = 0
  let newXPosition = curXPosition
  let newYPosition = curYPosition
  let finalPosition
  while (moves <= 10 && newXPosition < 100) {
    newXPosition++
    const data = new DataClass('legoWelt', newXPosition.toString(), newYPosition.toString())
    try {
      const response = await sendRequest('move', data)
      finalPosition = response
    } catch (error) {
      break
    }
    moves++
  }
  while (moves <= 10 && newYPosition < 100) {
    newYPosition++
    const data = new DataClass('legoWelt', newXPosition.toString(), newYPosition.toString())
    try {
      const response = await sendRequest('move', data)
      finalPosition = response
    } catch (error) {
      break
    }
    moves++
  }
  return finalPosition
}

module.exports = { moveTen, moveRight, moveLeft, moveUp, moveDown }