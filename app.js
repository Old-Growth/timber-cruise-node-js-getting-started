require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const {Pool, Query} = require('pg')

const configuration = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'PRODUCTION'
}

const db = new Pool(configuration)
db.connect().catch(err => console.error('connection error', err.stack))

const app = express()

app.use(bodyParser.json())

app.post('/collect', async (req, res, next) => {
  try {
    await db.query(
      'INSERT INTO payloads(app_bundle_id, payload) VALUES ($1, $2);',
      [req.headers['user-agent'], req.body]
    )

    res.status(202).send('')
  } catch (err) {
    next(err)
  }
})

if (process.env.NODE_ENV !== 'test') {
  app.use((err, req, res, next) => {
    console.error('error', err.stack)
    res
      .status(500)
      .contentType('application/json')
      .send(JSON.stringify({error: err}))
  })
}

module.exports = app
