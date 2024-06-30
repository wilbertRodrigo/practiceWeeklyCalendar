import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
});

const User = mongoose.model("User", userSchema);
