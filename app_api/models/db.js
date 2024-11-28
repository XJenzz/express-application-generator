const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://bryanp:bryanp@cluster0.phlqa.mongodb.net/mdpsi5a?retryWrites=true&w=majority&appName=Cluster0"
            // "mongodb://localhost:27017/mdpsi5a"
        );

        
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB