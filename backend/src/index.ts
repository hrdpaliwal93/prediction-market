import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import express from 'express'
const app = express()
app.use(express.json())
app.use(cors())


app.post('/buy', (req,res)=>{

})

app.post('/sell', (req,res)=>{
    
})

app.post('/split', (req,res)=>{
    
})

app.post('/merge', (req,res)=>{
    
})

app.get('/balance', (req,res)=>{
    
})

app.get('/holdings', (req,res)=>{
    
})

app.get('/closedOrders', (req,res)=>{
    
})



app.listen(8000)