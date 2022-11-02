const express = require('express');
const Course = require('../models/Course-model')

const getCourse = async(req,res,next)=>{
    try{
        const course = await Course.find();
     if(!course){
        return res.status(400).json({status:"error",message :"Course Not Found !!!"})
     }
     res.status(200).json({course: course})
    }catch(err){
        console.log(err);
    }

};
const updateCourse = async(req,res,next)=>{
    try{
        const course = await Course.findById(req.params.id);
        if(!course){
            return res.status(404).json({status:"Error",message:"Course not Found"});
        }
       course = await Course.findByIdAndUpdate(req.params.id,req.body);
       res.status(200).json({status:"Success",message:"Course Successfully upgraded"})
    }catch(err){
        res.json(err)
    }

};
const addCourse = async(req,res,next)=>{
    const course = await Course.create(req.body);
  
    res.status(201).json({
      success: true,
      course,
    });

};
const deleteCourse = async(req,res,next)=>{
    try{
        const course = await Course.findByIdAndDelete(req.params.id);
        if(!course){
            return res.status(404).json({status:"Error",message:"Course not Found"});
        }
        res.status(200).json({status:"Success",message:"Course Successfully Deleted"});
    }catch(err){
        res.json(err)
    }

};
const getSingleCourse = async(req,res,next)=>{
    try{
        const course = await Course.findById(req.params.id)
        if(!course){
            return res.status(404).json({status:"Error",message:"Course Not Found!!!"})
        }
        res.status(200).json({status:"Success",data:course})
    }catch(err){
         res.json(err)
    }

};
exports.getCourse = getCourse;
exports.addCourse = addCourse;
exports.updateCourse= updateCourse;
exports.deleteCourse= deleteCourse;
exports.getSingleCourse = getSingleCourse;
