import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      console.error("❌ MONGO_URI is not set in .env file");
      console.log("\n📋 Setup Instructions:");
      console.log("Option 1 - MongoDB Atlas (Free Cloud):");
      console.log("  1. Go to https://www.mongodb.com/cloud/atlas");
      console.log("  2. Create free account & cluster");
      console.log("  3. Get connection string from 'Connect' button");
      console.log("  4. Update MONGO_URI in .env file");
      console.log("\nOption 2 - Local MongoDB:");
      console.log("  brew install mongodb-community");
      console.log("  brew services start mongodb-community");
      process.exit(1);
    }
    
    console.log("🔄 Connecting to MongoDB...");
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`\n❌ MongoDB Connection Error: ${error.message}`);
    console.log("\n⚠️  Make sure:");
    console.log("   1. MongoDB Atlas credentials in .env are correct");
    console.log("   2. OR MongoDB is running locally (mongod)");
    console.log("   3. Your IP is whitelisted in MongoDB Atlas");
    process.exit(1);
  }
};

export default connectDB;