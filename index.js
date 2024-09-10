require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjIx",
  "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
 

}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req, res) => {
res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})