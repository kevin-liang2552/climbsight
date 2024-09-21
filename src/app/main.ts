import express from 'express'
import { config } from './config'

const port = config['PORT']

export const app = express()

app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})