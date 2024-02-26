const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
  joinedDate: { type: Date, default: Date.now },
  otp: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
