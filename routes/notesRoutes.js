const express = require('express');
const { getNotes, CreateNote, deleteNote, updateNote } = require('../controllers/notesController');
const { protect } = require('../middleware/authMiddleware');
// const Note = require('../db/models/noteModel')

const noteRouter = express.Router();


noteRouter.get("/",protect, getNotes)

noteRouter.route('/').post(protect, CreateNote)

noteRouter.route('/:id').delete(protect, deleteNote)

noteRouter.route('/:id').put(protect, updateNote)


// noteRouter.put("/:id", protect, updateNote)





// // getNotesById, updateNote, deleteNote

// router.get("/", async (req, res)=>{
//     try {
//         const notes = await Note.findOne({user: user._id})
//         res.status(200).send(notes)
//     } catch (error) {
//         res.send(error)
//     }
// })
// router.route('/create').post(protect, CreateNote)
// // router.route('/:id').get(getNotesById).put(protect, updateNote).delete(protect, deleteNote)


// // router.route('/:id').get().put().delete();

module.exports = noteRouter