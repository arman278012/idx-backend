const mongoose = require("mongoose")
require("dotenv").config()

const connection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGOSHURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected")
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = connection 