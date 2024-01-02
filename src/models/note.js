const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [3],
    },
    content: {
        type: String,
        required: true,
        minlength: [4],
    }
    
},
    {timestamps: true}
);

module.exports = mongoose.model('Note', noteSchema);