'use strict'

module.exports = (slapp) => {
  slapp.message('^(buddies)$', ['direct_mention', 'direct_message'], (msg, text) => {
    msg
      .say('Let me look that up for you')
  })
}
