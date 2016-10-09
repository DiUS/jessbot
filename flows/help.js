'use strict'

module.exports = (slapp) => {
  slapp.message('help', ['direct_mention', 'direct_message'], (msg, text) => {
    msg.say({
      text: 'Jessbot is always happy to help but my knowledge is limited to these question:"',
      attachments: [
        {
          title: 'buddies',
          text: "I'll show you all the current buddies",
          fallback: 'buddies',
          color: '#36a64f'
        },
        {
          title: 'info',
          text: 'I can provide general info on the buddy program',
          fallback: 'info',
          color: '#3371ff'
        },
        {
          title: 'progess',
          text: 'My ear is always to the ground. If you want the latest news just ask',
          fallback: 'progress',
          color: '#ffe933'
        },
        {
          title: 'neglated',
          text: "A bit sad I know, but I keep track of who we haven't heard from in a while",
          fallback: 'neglacted',
          color: '#ff3333'
        }
      ]
    })
  })
}
