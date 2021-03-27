"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const typeorm_1 = require("typeorm");
const user_1 = require("./models/user");
const uuid_1 = require("uuid");
(async () => {
    const app = express_1.default();
    const router = express_promise_router_1.default();
    const port = 3000;
    async function getConnection() {
        const connection = await typeorm_1.createConnection({
            database: 'demo',
            entities: [user_1.User],
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
            synchronize: true,
        });
        return connection;
    }
    const connection = await getConnection();
    router.post('/users', async (req, res) => {
        // render the index template
        const repository = connection.getRepository(user_1.User);
        // const entity = req.body;
        console.log('----------', req);
        const entity = { name: `testUser_${uuid_1.v4()}`, description: 'description' };
        const resp = await repository.save(entity);
        res.status(200).send(resp);
    });
    router.get('/users', async (req, res) => {
        // render the index template
        const repository = connection.getRepository(user_1.User);
        // const entity = req.body;
        const resp = await repository.find();
        res.status(200).send(resp);
    });
    app.use('/', router);
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.info(`server started at http://localhost:${port}`);
    });
})();
//# sourceMappingURL=index.js.map