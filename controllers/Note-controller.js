const Note = require('../models/Notes-model');

const AddNotes = async(req,res) =>{
   const note =  await Note.create(req.body);
   res.status(201).json({
    success: true,
    note,
   })
}
const getNotes = async(req,res) =>{
    const note = await Note.find();
    if(note.length === 0) res.status(400).json({status:false,message:"No Data Found"});
    res.status(200).json({status:true,message:note});
}

exports.AddNotes = AddNotes;
exports.getNotes = getNotes;