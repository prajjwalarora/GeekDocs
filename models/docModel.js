const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  docId: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  activity: Array,
  Notes: Array,
  data: String,
});
docSchema.pre("save", async function (next) {
  const nanoid = await import("nanoid");
  this.docId = nanoid.nanoid(20);
  next();
});
const Doc = mongoose.model("Doc", docSchema);
module.exports = Doc;
