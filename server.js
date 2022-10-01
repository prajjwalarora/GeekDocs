const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./socket");
const app = require("./app");

const DATABASE_URI = process.env.DATABASE_URI;
mongoose.connect(DATABASE_URI).then(() => {
  console.log("DB connected successfully!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
