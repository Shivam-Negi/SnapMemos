const CrudRepository = require('./crud-repository');
const Note = require('../models/note');

class NoteRepository extends CrudRepository {
    constructor() {
        super(Note);
    }

    async getNoteByTitle(title) {
        try {
            const note = await Note.findOne({
                title: title,
            });
            return note;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = NoteRepository;