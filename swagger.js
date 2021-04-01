const openApi = require('./app/openAPI/notes.swagger')

module.exports = {
    swaggerDocument: {
        openapi: '3.0.1',
        info: {
            version: '1.0.0',
            title: 'Note API',
            description: 'Api for homework',
            termsOfService: '',
            contact: {
                name: 'Peterle István Soma',
            },
        },
        tags: [{
                name: 'Notes'
            },
            {
                name: 'Note'
            }
        ],
        paths: {
            "/notes": {
                "get": openApi.getNotes
            },
            "/note/{noteId}": {
                "get": openApi.getNote
            },
            "/note/update/{noteId}": {
                "put": openApi.updateNote
            },
            "/note/delete/{noteId}": {
                "delete": openApi.delNote
            },
            "/note/create": {
                "post": openApi.delNote
            }
        }
    }
}