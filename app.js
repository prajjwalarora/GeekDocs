const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoutes");
const docRouter = require("./routes/docRoutes");
const app = express();

app.use(cors({ credentials: true, origin: "http://10.1.105.126:3000" }));

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/doc", docRouter);

module.exports = app;
