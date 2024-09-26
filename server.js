const express = require('express')
const bookRoutes = require('./routes/bookRoutes')

const app = express();

const PORT = 8002;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Just strted')
})

app.use('/api', bookRoutes)

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
} )


//http://localhost:8002/api/createBook
//http://localhost:8002/api/getAllBook
