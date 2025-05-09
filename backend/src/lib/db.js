import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_URI);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // dbName: "RealTime-Chat-App", // Explicitly set the DB name (redundant if URI includes it)
      connectTimeoutMS: 30000,     // 30-second connection timeout
      socketTimeoutMS: 30000,      // 30-second socket timeout
      // tls: true,                   // Force TLS/SSL (required for Atlas)
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(`Using Database: ${mongoose.connection.db.databaseName}`); // Verify DB name
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1); // Exit with failure
  }
};
