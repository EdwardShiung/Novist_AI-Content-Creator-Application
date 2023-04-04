module.exports = app => {
    const swaggerJsDoc = require('swagger-jsdoc');
    const swaggerUI = require('swagger-ui-express');

    const option = {
        definition: {
            openapi: '3.0.0',
            info:{
                title: 'Novist Express API Document',
                version: '1.0.0',
                description: 'Software Engineering Project'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                }
            ],
            components:{
                securitySchemes: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                    }
                }
            },
            security:{
                bearerAuth: []
            }
        },
        apis: ['./routes/*js', './swagger_document/*js']
    };

    const specs = swaggerJsDoc(option);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
}