const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('i hope i did this right...')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

module.exports = app
