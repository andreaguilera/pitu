import express from 'express'
import linksRouter from './routes/links'

const app = express()
app.use(express.json())
app.use(linksRouter)

export default app