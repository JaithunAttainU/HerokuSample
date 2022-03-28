const express = require('express')
const app = express()
const postsData = require('./mock/posts.json')

app.get('/', (req, res) => {
  res.send("Hello")
})

app.get('/posts', (req, res) => {
  res.json(postsData.posts)
})

app.listen(3000)