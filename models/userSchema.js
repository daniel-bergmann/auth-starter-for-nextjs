const mongoose = require("mongoose")

//
// // Defining a Schema for the User model
//

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.models.User || mongoose.model("User", userSchema)
