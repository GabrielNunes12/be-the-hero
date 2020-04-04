const express = require('express');

//chamando o CORS
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());

/**
 * Metodos HTTP
 * 
 * GET: Buscar info do back-end
 * 
 * POST: criar uma informação no back-end
 * 
 * PUT: alterar info no back-end
 * 
 * Delete: deletar info no back-end
 */

 /**
  * Tipos de parametro
  * 
  * Query: Parametros nomeados enviados na rota após o simbolo de '?' (filtros, paginação)
  * 
  * Route parms: parametros usados para identificar recursos
  * 
  * Request Body: corpo da requisição usado para criar ou alterar recursos.
  */

  /**
   * SQL: MySQL, PostgreSQL, Oracle, SQL Server, SQLite
   * NOSQL: MongoDB, CouchDB, Kassandra
   */

   /** 
    * Driver: SELECT * FROM users
    * Query Builder: table('user').select('*').where() 
    */
app.use(routes);

app.use(cors());

app.listen(3333);