'use strict'

const express = require('express')
const Slapp = require('slapp')
const ConvoStore = require('slapp-convo-beepboop')
const Context = require('slapp-context-beepboop')

var config = {
  port: process.env.PORT || 5000,
}

var slapp = Slapp({
  convo_store: ConvoStore(),
  context: Context()
})

var app = {
  config,
  slapp,
}

require('./src/help')(app)

// presence polyfill
require('beepboop-slapp-presence-polyfill')(slapp, {
  debug: true
})

// attach Slapp to express server
var server = slapp.attachToExpress(express())

app.slapp.message('swanson', ['mention', 'direct_mention', 'direct_message'], (msg) => {
  msg.say('Swanson quote goes here.')
})


// start http server
server.listen(config.port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${config.port}`)
})
