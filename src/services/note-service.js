const { StatusCodes } = require('http-status-codes');
const { NoteRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const noteRepo = new NoteRepository();

async function createNote(data) {
    try {
        const note = await noteRepo.create({
            title: data.title,
            content: data.content,
        });
        return note;
    } catch (error) {
        throw new AppError('Something went wrong while creating creating note',
                            StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllNotes() {
    try {
        const notes = await noteRepo.getAll();
        return notes;
    } catch (error) {
        throw new AppError('Something went wrong while fetching notes',
                            StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getNote(id) {
    try {
        const note = await noteRepo.get(id);
        if(!note) {
            throw new AppError('no note found', StatusCodes.BAD_REQUEST);
        }
        return note;
    } catch (error) {
        if(error instanceof AppError)   throw error;
        throw new AppError('Something went wrong while fetching note',
                            StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getNoteByTitle(title) {
    try {
        const note = await noteRepo.getNoteByTitle(title);
        if(!note) {
            throw new AppError('no note found', StatusCodes.BAD_REQUEST);
        }
        return note;
    } catch (error) {
        if(error instanceof AppError)   throw error;
        throw new AppError('Something went wrong while fetching note',
                            StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateNote(id, data) {
    try {
        const note = await noteRepo.update(id, data);
        if(!note) {
            throw new AppError('no note found', StatusCodes.BAD_REQUEST);
        }
        return note;
    } catch (error) {
        if(error instanceof AppError)   throw error;
        throw new AppError('Something went wrong while updating note',
                            StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteNote(id) {
    try {
        const note = await noteRepo.destroy(id);
        return note;
    } catch (error) {
        throw new AppError('Something went wrong while deleting note',
                            StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createNote,
    getAllNotes,
    getNote,
    getNoteByTitle,
    updateNote,
    deleteNote
}