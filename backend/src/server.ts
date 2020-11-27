import app from './app'
import database from './database'

database.sync()
console.log('database running at 3306')
app.listen(3001)
console.log('servidor rodando na 3001')