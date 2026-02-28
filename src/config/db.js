const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MongoDB_UserName}:${process.env.MongoDB_Password}@cluster0.yuxyuxp.mongodb.net/${process.env.MongoDB_Database}?appName=Cluster0`
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};



module.exports = connectDB;