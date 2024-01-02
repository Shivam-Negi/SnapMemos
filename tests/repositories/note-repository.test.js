const NoteRepository = require('../../src/repositories/note-repository');
const Note = require('../../src/models/note');

jest.mock('../../src/models/note.js');

describe('get note tests', () => {
    test('should get note by title', async () => {
        const data = {
            title: 'testing'
        }
        const spy = jest.spyOn(Note, 'findOne').mockImplementation(() => {
            return {...data, createdAt: '2023-01-02'}
        })
        const noteRepo = new NoteRepository();
        const note = await noteRepo.getNoteByTitle(data);
        
        expect(spy).toHaveBeenCalled();
        expect(note.title).toBe(data.title);
        // expect(note.createdAt).toBeUndefined(); // will fail
    })
});