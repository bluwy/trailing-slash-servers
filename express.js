import express from 'express'

const app = express()
app.use(express.static('website', { extensions: ['html'] }))
app.listen(3001)
