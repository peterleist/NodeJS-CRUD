module.exports = function(app) {

    var notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/note/create', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/note/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/note/update/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/delete/:noteId', notes.delete);
}