const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: [true, "We would love to know your name!"],
  },

  userId: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
});

userSchema.methods.verifyPassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  const nanoid = await import("nanoid");
  this.userId = nanoid.nanoid(10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
