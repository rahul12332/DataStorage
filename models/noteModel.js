const mongoose = require('mongoose')

notesSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
    }
    ,
        {
            timeStamps:true
        }
);

const Note = mongoose.model("UserNote", notesSchema);
module.exports = Note;
