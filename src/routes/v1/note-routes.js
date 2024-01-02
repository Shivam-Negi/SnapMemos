const express = require('express');
const { NoteController } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');
const router = express.Router();

router.get('/', NoteController.getAllNotes);

router.get('/:id', NoteController.getNote);     // get note by id

router.get('/title/:title', NoteController.getNoteByTitle);

router.post('/', AuthMiddlewares.validateNote,
                    NoteController.createNote);

router.patch('/:id', AuthMiddlewares.validateNoteEdit, 
                        NoteController.updateNote);

router.delete('/:id', NoteController.deleteNote);

module.exports = router;