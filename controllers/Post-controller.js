const express = require("express");
const Post = require("../models/News-model");

const addpost = async (req, res, next) => {
  try{
    const post = await Post.create(req.body);
    res.status(201).json({ Status: "Success", data: post });
  }catch(err){
    console.log(err)
  }
  
};
const getPost = async (req, res, next) => {
  try {
    const post = await Post.find();
    if (!post) {
      return res
        .status(400)
        .json({ Status: "Error", Message: "Post not Found!!!" });
    }
    res.status(200).json({ Status: "success", data: post });
  } catch (err) {
    return res.json(err);
  }
};
const getSinglePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res
        .status(400)
        .json({ status: "Error", Message: "Post Not Found !!!" });
    }
    res.status(200).json({ Staus: "Success", Data: post });
  } catch (err) {
    return res.json(err);
  }
};
const removePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res
        .status(400)
        .json({ Status: "Error", Message: "Post not Found!!!" });
    }
    res.status(200).json({ Staus: "Success", Message: "Successfilly Removed" });
  } catch (err) {
    return res.json(err);
  }
};
const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res
        .status(400)
        .json({ Status: "Error", Message: "Post not Found!!!" });
    }
    post = await Post.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({ Staus: "Success", Data: post });
  } catch (err) {
    return res.json(err);
  }
};

exports.addpost = addpost;
exports.getPost = getPost;
exports.getSinglePost = getSinglePost;
exports.updatePost = updatePost;
exports.removePost = removePost;
