import express from 'express'

const app = express()
app.use(express.static('website', {
  extensions: process.env.HTML_EXTENSIONS === 'true'
    ? ['htm', 'html']
    : false
}))
app.listen(3001)
