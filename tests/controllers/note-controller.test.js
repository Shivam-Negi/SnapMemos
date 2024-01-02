const NoteController = require('../../src/controllers/note-controller');
const NoteService = require('../../src/services/note-service');
const {mockRequest, mockResponse} = require('../mocker');

jest.mock('../../src/services/note-service.js');

test('should return notes', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [
        {
            title: 'abcd',
            content: 'ajfisaf'
        },
        {
            title: 'hihih',
            content: 'inininin'
        }
    ];
    NoteService.getAllNotes = jest.fn().mockReturnValue(response);
    await NoteController.getAllNotes(req, res);
    expect(res.json).toHaveBeenCalledWith({
        success : true,
        message : 'Successfully completed the task',
        data : response,
        error : {}
    })
})
