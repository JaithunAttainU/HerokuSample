const express = require('express')
const app = express()
const postsData = require('./mock/posts.json')

app.get('/', (req, res) => {
  res.send(process.env)
})

app.get('/posts', (req, res) => {
  res.json(postsData.posts)
})

const PORT = process.env.PORT || 3000
app.listen(PORT)