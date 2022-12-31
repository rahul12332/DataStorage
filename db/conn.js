const mongoose = require('mongoose')

const dbConnect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true, 
            });
            console.log(`connection is successfullu install congrulation hurray${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = dbConnect;