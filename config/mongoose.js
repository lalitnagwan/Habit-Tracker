const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      // console.log("dfsfsfs ",process.env.MONGO_URI)
      const conn = await mongoose.connect("mongodb+srv://lalitnagwan0:iitspl@5131@cluster0.bpb3miy.mongodb.net/habitTrackerdb");

      console.log(`                                 MongoDB Connection Established      \n`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

module.exports = connectDB;
