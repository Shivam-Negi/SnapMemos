const CrudRepository = require('./crud-repository');
const Note = require('../models/note');

class NoteRepository extends CrudRepository {
    constructor() {
        super(Note);
    }

    async getNoteByTitle(title) {
        const note = await Note.findOne({
            title: title,
        });
        return note;
    }
};

module.exports = NoteRepository;