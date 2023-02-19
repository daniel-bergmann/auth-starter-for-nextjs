import mongoose from "mongoose"

//
// // Set up default mongoose connection
//

const connection = {}

async function dbConnect() {
  // Check if we have connection to our database
  if (connection.isConnected) {
    // Use existing database connection
    return
  }
  const db = await mongoose.connect(process.env.MONGODB_URI)
  connection.isConnected = db.connections[0].readyState
}

export default dbConnect
