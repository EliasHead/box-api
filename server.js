require('dotenv').config()
const app = require('./app');
const port = 3005;
const db = require('./src/infra/database');

const routes = require('./routes');
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));