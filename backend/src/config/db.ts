import mongoose from 'mongoose'
mongoose.connect(`${process.env.DATABASE}`).then(()=>console.log("database connected!!"))

const userSchema = new  mongoose.Schema({
    name:{type:String},
    balance:{type:Number}
})

enum orderSide{
    'BUY','SELL'
}
const orderSchema = new mongoose.Schema({
    marketID:{type:mongoose.Schema.ObjectId},
    quantity:{type:Number},
    side:{type:String, enum:['BUY','SELL']},
    option:{type:String, enum:['YES', 'NO']},
    price:{type:Number}

})

const marketSchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    endsOn:{type:Date},
    outcome:{type:String, enum:['BUY', 'SELL']},
    yesOrderbook:[],
    noOrderbook:[]
})
