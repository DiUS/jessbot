'use strict'

const Slapp = require('slapp')
const BeepBoopConvoStore = require('slapp-convo-beepboop')
const BeepBoopContext = require('slapp-context-beepboop')
const DB = require('./db')

module.exports = (express) => {
  let db = DB()

  let slapp = Slapp({
    convo_store: BeepBoopConvoStore(),
    context: BeepBoopContext()
  })

  require('./flows')(slapp, db)

  return slapp.attachToExpress(express)
}

