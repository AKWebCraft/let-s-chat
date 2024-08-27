const mongoose = require("mongoose");
const MONGODB_URI="mongodb+srv://arslankhalil660:ArslanKhalil@cluster-1.jpbha.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster-1"

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connectionInstance = await mongoose.connect(
      MONGODB_URI
    );
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
