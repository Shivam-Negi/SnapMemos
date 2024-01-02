const NoteService = require('../../src/services/note-service');
const NoteRepository = require('../../src/repositories/note-repository');

jest.mock('../../src/repositories/note-repository.js');

describe('note service create test', () => {
    test('should successfully create a note', async () => {
        const data = {
            title: 'sleep',
            content: 'just go to sleep'
        };
        (NoteRepository.prototype.create).mockReturnValue({
            ...data, createdAt: '2024-01-02'
        });
        const response = await NoteService.createNote(data);
        expect(response.title).toBe(data.title);
    })
})