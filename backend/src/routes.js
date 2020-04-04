const express = require('express');

//importando OngController
const OngController = require('./controllers/OngController');
//importando IncidentsControllers
const IncidentsController = require('./controllers/IncidentController');
//importando ProfileControllers
const ProfileController = require('./controllers/ProfileController');
//importando Login
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Incidents
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

//Deleting
routes.delete('/incidents/:id', IncidentsController.delete);

//profile
routes.get('/profile', ProfileController.index);

//login
routes.post('/sessions', SessionController.create);

module.exports = routes;