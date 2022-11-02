const express = require("express");
const User = require("../models/User-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "dvhasvdvdahgkdghadghajhfdfaghdfgfdgfaghavsdbnavsdgfasghdfshgds";

const Signup = async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    password,
    city,
    address,
    phone,
    about,
    images,
    role,
  } = req.body;
  const existingUser = await User.findOne({ email: email });
  const encryptedPassword = await bcrypt.hashSync(password, 10);
  try {
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "Failed", message: "User Already Exits" });
    }
    await User.create({
      first_name,
      last_name,
      email,
      password: encryptedPassword,
      city,
      address,
      phone,
      about,
      images,
      role,
    });
    res
      .status(200)
      .json({ status: "User Successfully Created", message: User });
  } catch (err) {
    console.log(err);
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "Failed", message: "User Not Found" });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res
        .status(400)
        .json({ status: "Failed", message: "Incorrect password" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    if (res.statusCode === 200) {
      return res.json({
        status: "success",
        Token: token,
        data: user,
        message: "Successfully Logged In !!",
      });
    } else {
      return res.status(400).send("error");
    }
  } catch (err) {
    res.json(err);
  }
  next();
};
const verifyToken = async (req, res, next) => {
  // console.log(req.headers);
  const headers = req.headers[`authorization`];
  // console.log(headers);
  const token = headers.split(" ")[1];
  if (!token) {
    return res.status(404).json({ status: "error", message: "Token Error" });
  }
  jwt.verify(String(token), JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(400)
        .json({ status: "error", message: "No Token found" });
    }
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (err) {
    throw err;
  }
  if (!user) {
    return res.status(400).json({ status: "error", message: "User Not Found" });
  }
  res.status(200).json({ User: user });
  next();
};

const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id, "-password");
    if (!user) {
      return res
        .status(404)
        .json({ status: "Error", message: "User not Found" });
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      message: "User Successfully updated",
      user: user,
    });
  } catch (err) {
    res.json(err);
  }
};
const allUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User Not Found !!!" });
    }
    res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
  }
};
const logout = (req, res, next) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  jwt.verify(String(prevToken), JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";
    return res.status(200).json({ message: "Successfully Logged Out" });
  });
};

exports.login = login;
exports.Signup = Signup;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.logout = logout;
exports.allUsers = allUsers;
