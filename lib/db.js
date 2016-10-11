'use strict'

const firebase = require('firebase')

module.exports = () => {
  firebase.initializeApp({
    serviceAccount: {
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    },
    databaseURL: process.env.FIREBASE_DB_URL
  })

  let database = firebase.database()

  return {
  }
}
