const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editByNotesIdHandler, deleteByNotesIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editByNotesIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteByNotesIdHandler,
  },
];

module.exports = routes;