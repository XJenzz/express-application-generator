const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            // "mongodb+srv://bryanp:bryanp@cluster0.phlqa.mongodb.net/mdpsi5a?retryWrites=true&w=majority&appName=Cluster0"
            // "mongodb://localhost:27017/mdpsi5a"
            "mongodb://bryanp:bryanp@cluster0-shard-00-00.phlqa.mongodb.net:27017,cluster0-shard-00-01.phlqa.mongodb.net:27017,cluster0-shard-00-02.phlqa.mongodb.net:27017/mdpsi5a?ssl=true&replicaSet=atlas-hwgv4g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
        );

        
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB