const openApi = require('./app/openAPI/notes.swagger')

module.exports = {
    swaggerDocument: {
        openapi: '3.0.1',
        info: {
            version: '1.0.0',
            title: 'APIs Document',
            description: 'your description here',
            termsOfService: '',
            contact: {
                name: 'Tran Son hoang',
                email: 'son.hoang01@gmail.com',
                url: 'https://hoangtran.co'
            },
            license: {
                name: 'Apache 2.0',
                url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
            }
        },
        tags: [{
            name: 'Notes'
        }],
        paths: {
            "/notes": {
                "get": openApi.getNotes
            },
            "/note/{noteId}": {
                "get": openApi.getNote
            },
            "/note/update/{noteId}": {
                "put": openApi.updateNote
            }
        }
    }
}