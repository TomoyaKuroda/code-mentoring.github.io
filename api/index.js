const app = require('express')()

app.get('/api', (req, res) => {
  res.end(`Hello! Go to item`)
})

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params
  res.end(`Item: ${slug}`)
})

module.exports = app