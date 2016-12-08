module.exports = app => {
  var HELP_TEXT = `
  I will respond to the following messages:
  \`help\` - to see this message.
  \`swanson\` - make me say something.
  `

  // response to the user typing "help"
  app.slapp.message('help', ['mention', 'direct_mention', 'direct_message'], (msg) => {
    msg.say(HELP_TEXT)
  })
}
