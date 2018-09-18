class Data {
  constructor(callsign, x, y, node) {
    this.callsign = callsign
    this.x = x || null
    this.y = y || null
    this.node = node || null
  }
}

module.exports = Data
