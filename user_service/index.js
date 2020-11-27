require('dotenv').config({path:__dirname + '/config/.env'})
const express = require('express')
const axios = require('axios')

const cookieParser = require('cookie-parser')
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/error')

require('./config/db')

const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 4000


app.use(express.json())
app.use(cookieParser())

app.use(logger)


app.use(userRouter)

app.use(errorHandler)


const server = app.listen(port, ()=>{
    console.log('server is up on the port'+ port)
})

// Handle unhandled promise rejections 
process.on('unhandledRejection', (err, Promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});