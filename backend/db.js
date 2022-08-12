const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const cnct = await mongoose.connect(`mongodb+srv://HalilUllah:99Y01m18D@cluster0.tj9g1.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true
        })
        console.log(`MongoDB connected to: ${cnct.connection.host} `);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB