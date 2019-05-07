const express = require('express')

//Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

    const userService = require('../api/users/userService')
    userService.register(router, '/users')

    // Swagger
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    server.use('/api/v1', router);
}