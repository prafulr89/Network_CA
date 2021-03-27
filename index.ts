import express from 'express';
import PromiseRouter from 'express-promise-router';
import { Connection, createConnection } from 'typeorm';
import { User } from './models/user';
import { v4 } from 'uuid';

(async () => {
  const app = express();

  const router = PromiseRouter();
  const port = 3000;
  
  async function getConnection() {
    const connection = await createConnection({
      database: 'demo',
      entities: [User], // Add DB entities here
      host: 'demo-db',
      logging: true,
      migrations: ['dist/migrations/*.js'],
      migrationsRun: false,
      password: 'abcd1234',
      port: 5432,
      type: 'postgres',
      name: 'default',
      username: 'postgres',
      //ssl: true,
      synchronize: true, // ******** TURN OFF FOR PRODUCTION! ************ //
    });
    return connection;
  }
  const connection = await getConnection();
  
  router.post('/users', async (req, res) => {
    // render the index template
    
    const repository = connection.getRepository<User>(User);
    
    // const entity = req.body;
    
    console.log('----------', req);
    const entity = {name: `testUser_${v4()}`, description: 'description'};
    const resp = await repository.save(entity);
    res.status(200).send(resp)
  } );

  router.get('/users', async (req, res) => {
    // render the index template
    
    const repository = connection.getRepository<User>(User);
    
    // const entity = req.body;
    
    const resp = await repository.find();
    res.status(200).send(resp)
  } );
  
  app.use('/', router);
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.info(`server started at http://localhost:${port}`);
  });

})();
