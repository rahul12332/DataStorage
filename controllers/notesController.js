const Note = require('../models/noteModel')
const asyncHandler = require("express-async-handler")

const getNotes = async (req, res)=>{
  console.log("user ne token sahi beja h userId",req.userId)
  const notes = await Note.find({ userId:req.userId  });
  res.json(notes)
}

const CreateNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;

    //  const note = new Note({
    //   title:title,
    //   content:content,
    //   category:category,
    //   userId:req.userId
    //  });

    //  try {
    //    await note.save()
    //    res.status(201).json(note)
    //  } catch (error) {
    //   console.log("error aa gayi",error)
    //  }

  
    if (!title || !content || !category) {
      res.status(400);
      throw new Error("Please Fill all the feilds");
      return;
    } else {
      const note = new Note({  title,
         content,
         category,
      userId:req.userId
      
      });
  
      const createdNote = await note.save();
  
      res.status(201).json(createdNote);
      console.log(createdNote)
    }
  });

  const getNotesById = asyncHandler(async (req, res)=>{
    const note = await Note.findById(req.params.id);

    if(note){
        res.json(note);
    }
    else{
        res.status(400).json({message: "Note not found"});
    }
  })

  const updateNote = asyncHandler(async(req, res)=>{
    const {title, content, category} = req.body

    const note = await Note.findById(req.params.id);
    if(note.userId.toString()!== req.userId.toString()){
      res.status(401)
      throw new Error("you can't be perfrom this action")
    }
    if(note){
      note.title = title;
      note.content = content;
      note.category = category;

      const updatedNote = await note.save();
      res.json(updatedNote)
    }
    else{
      res.status(400);
      throw new Error('Notes not Found')
    }

  });
  const deleteNote = asyncHandler(async(req, res)=>{
    const note = await Note.findById(req.params.id);
    if(note.userId.toString()!== req.userId.toString()){
      res.status(401)
      throw new Error("you can't be perfrom this action")
    }
    if(note){
      await note.remove();
      res.status(200).json({message :"note delteted"})
    }else{
      res.status(400)
      res.json({message:"error"})
    }
  })

module.exports ={getNotes, CreateNote, getNotesById, updateNote, deleteNote}