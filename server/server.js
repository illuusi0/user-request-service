const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const DATA_FILE = './data.json'

app.get('/data', (_req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data file')
            return
        }
        res.json(JSON.parse(data))
    })
})

app.post('/data', (req, res) => {
    const newData = req.body
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data file')
            return
        }
        const existingData = JSON.parse(data || '[]')

        const now = new Date()
        const formattedDate = [
            ('0' + now.getDate()).slice(-2),
            ('0' + (now.getMonth() + 1)).slice(-2),
            now.getFullYear(),
        ].join('.')

        existingData.push({
            ...newData,
            date: formattedDate,
            status: 'В очереди',
        })
        fs.writeFile(DATA_FILE, JSON.stringify(existingData, null, 2), (writeErr) => {
            if (writeErr) {
                res.status(500).send('Error writing data file')
                return
            }
            res.status(201).json({ message: 'Data added', data: { ...newData, date: formattedDate } })
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
