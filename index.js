const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const router = express.Router()

app.use(express.static(path.join(__dirname, './')))

router.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.use('/', router)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})