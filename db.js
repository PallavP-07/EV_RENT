let mongoose =require('mongoose');
require('dotenv').config();

const connectDB =async ()=>{

    try{
     const conn = await mongoose.connect(process.env.DB_CONNECT)
     console.log(`MongoDB database connected successfully..... `);  
    }catch (error){
        console.log(`Error in Mongodb ${error}`)
    }
}

module.exports= {connectDB};