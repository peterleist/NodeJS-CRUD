module.exports = {
    getNotes: {
        tags: ['Notes'],
        description: "Returns all notes from the database",
        operationId: 'getNotes',
        security: [{
            bearerAuth: []
        }],
        responses: {
            "200": {
                description: "A list of notes.",
                content: {
                    "application/json": {
                        schema: {
                            items: {
                                title: {
                                    type: 'string',
                                    description: 'Title'
                                },
                                content: {
                                    type: 'string',
                                    description: 'Content'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    getNote: {
        tags: ['Note'],
        description: "Returns all notes from the database",
        operationId: 'getNote',
        security: [{
            bearerAuth: []
        }],
        parameters: [{
            "name": "noteId",
            "in": "path",
            "type": "string",
            "collectionFormat": "multi",
        }],

        responses: {
            "200": {
                description: "A note.",
                content: {
                    "application/json": {
                        schema: {
                            items: {
                                title: {
                                    type: 'string',
                                    description: 'Title'
                                },
                                content: {
                                    type: 'string',
                                    description: 'Content'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    updateNote: {
        tags: ['Note'],
        description: "Returns all notes from the database",
        operationId: 'updateNote',
        security: [{
            bearerAuth: []
        }],
        consumes: 'application/json',
        parameters: [{
                "name": "noteId",
                "in": "path",
                "type": "string",
                "collectionFormat": "multi",
            },
            {
                "name": "title",
                "in": "formData",
                "type": "string",
                "collectionFormat": "multi",
            },
            {
                "name": "content",
                "in": "formData",
                "type": "string",
                "collectionFormat": "multi",
            }
        ],
        responses: {
            "200": {
                description: "A note.",
                content: {
                    "application/json": {
                        schema: {
                            items: {
                                title: {
                                    type: 'string',
                                    description: 'Title'
                                },
                                content: {
                                    type: 'string',
                                    description: 'Content'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    delNote: {
        tags: ['Note'],
        description: "Returns all notes from the database",
        operationId: 'deleteNote',
        security: [{
            bearerAuth: []
        }],
        parameters: [{
            "name": "noteId",
            "in": "path",
            "type": "string",
            "collectionFormat": "multi",
        }],
    },
    createNote: {
        tags: ['Note'],
        description: "Returns all notes from the database",
        operationId: 'createNote',
        security: [{
            bearerAuth: []
        }],
        consumes: 'application/json',
        parameters: [{
                "name": "noteId",
                "in": "path",
                "type": "string",
                "collectionFormat": "multi",
            },
            {
                "name": "title",
                "in": "formData",
                "type": "string",
                "collectionFormat": "multi",
            },
            {
                "name": "content",
                "in": "formData",
                "type": "string",
                "collectionFormat": "multi",
            }
        ],
        responses: {
            "200": {
                description: "A note.",
                content: {
                    "application/json": {
                        schema: {
                            items: {
                                title: {
                                    type: 'string',
                                    description: 'Title'
                                },
                                content: {
                                    type: 'string',
                                    description: 'Content'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}