import express from 'express';
import {engine} from 'express-handlebars'
import path from 'path';
import {fileURLToPath} from 'url';
import routes from './routes/index.js';

const __filename__ = fileURLToPath(import.meta.url);
const __dirname__ = path.dirname(__filename__);

const app = express();
const port = process.env.PORT || 3000;

app.engine('hbs', engine({extname: 'hbs'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname__, 'views'));

app.use(express.static(path.join(__dirname__, 'public')));
app.use("/js", express.static(path.join(__dirname__, "node_modules", "htmx.org", "dist")))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})