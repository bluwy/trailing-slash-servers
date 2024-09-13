import express from 'express'

const app = express()
app.use(express.static('website'))
app.listen(3001)
