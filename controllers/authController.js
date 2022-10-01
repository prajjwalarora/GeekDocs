const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

const createAndSendToken = (user, req, res) => {
  const token = signToken(user.userId);

  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  user.password = undefined;
  return res.status(200).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });
    return createAndSendToken(newUser, req, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password required!",
      });
    }

    const user = await User.findOne({ email: email }).select("+password");

    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "No user found with given email!",
      });
    }

    const isPasswordValid = await user.verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "error",
        message: "Password is invalid!",
      });
    }

    return createAndSendToken(user, req, res);
  } catch (error) {
    next(error);
  }
};

exports.protect = async (req, res, next) => {
  let token;
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(400).json({
      status: "error",
      message: "Please login in order to perfom operations!",
    });
  }

  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const user = await User.findOne({ userId: decodedToken.id });
  if (!user) {
    return res.status(401).json({
      status: "error",
      message: "Couldn't identify the user!",
    });
  }
  res.locals.user = user;
  req.user = user;
  next();
};
