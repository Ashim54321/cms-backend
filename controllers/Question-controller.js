const Question = require('../models/Question-model');

const addQuestion = async (req,res) =>{
    try{
        const question = await Question.create(req.body)
        res.status(201).json({status:"Success",data:question})
    }catch{
        res.status(400).json({status:" Failed to add question "})
    }
}

const RemoveQuestion = async(req,res) =>{
    try{
        const question = await Question.findByIdAndDelete(req.params.id);
        if(!question){
            return res.status(400).json({status:"Cannot find question"})
        }
        res.status(200).json({status:"Question successfully removed"})
    }catch(e){
        res.status(400).json({status:" Failed to remove question", e})
    }
}
const updateQuestion = async(req,res) =>{
    try{
        const question = await Question.findById(req.params.id);
        if(!question){
            return res.status(400).json({status:"Cannot find question"})
        }
        question = await Question.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({status:"Question successfully Update"})
    }catch(e){
        res.status(400).json({status:" Failed to remove question", e})
    }
} 
const showQuestion = async(req,res) =>{
    try{
        const question = await Question.find();
        if(!question){
            return res.status(400).json({status:"Cannot find question"})
        }
        res.status(200).json({status:"Success",data:question})
    }catch(e){
        res.status(400).json({status:" Failed to remove question", e})
    }
}
exports.addQuestion = addQuestion;
exports.RemoveQuestion = RemoveQuestion;
exports.updateQuestion = updateQuestion;
exports.showQuestion = showQuestion;