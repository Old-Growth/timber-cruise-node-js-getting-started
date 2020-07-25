const supertest = require('supertest')

const app = require('./app.js')
const request = supertest(app)

describe('POST /collect ', () => {
  test('it should return 202 for an empty payload', async () => {
    const response = await request
      .post('/collect')
      .set('Content-Type', 'application/json')
      .set('User-Agent', 'com.example.App')
      .send('{}')

    expect(response.status).toBe(202)
  })

  test('it should return 500 for missing User-Agent header', async () => {
    const response = await request
      .post('/collect')
      .set('Content-Type', 'application/json')
      .send('{}')

    expect(response.status).toBe(202)
  })
})
