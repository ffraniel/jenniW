const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/posts/:uid', (req, res) => {
    return app.render(req, res, '/posts', { uid: req.params.uid })
  })

  server.get('/search/:searchValue', (req, res) => {
    let searchedValue;
    if (req.params.searchValue) {
      searchedValue = req.params.searchValue;
    }
    if  (!req.params.searchedValue) {
      searchedValue = "brains";
    }
    return app.render(req, res, '/search', { searchValue: searchedValue })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})