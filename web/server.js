const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const main = require('./routers/main');
const layer7 = require('./routers/layer7');
const unifox = require('./routers/unifox');
const nefus = require('./routers/nefus');
const teamlog = require('./routers/teamlog');
const emotion = require('./routers/emotion');
const login = require('./routers/login');
const viewlayer7 = require('./routers/viewlayer7');

const session = expressSession({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
});

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(session);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/routers/views'));
app.engine('html', require('ejs').renderFile);

app.use('/', main);
app.use('/layer7', layer7);
app.use('/unifox', unifox);
app.use('/nefus', nefus);
app.use('/teamlog', teamlog);
app.use('/emotion', emotion);
app.use('/login', login);
app.use('/viewlayer7', viewlayer7);

app.all('*',
  function (req, res) {
    res.status(404).send('<h1> 404 Error </h1>');
  }
);

http.listen(80, function () {
  console.log('server on!');
});

module.exports = app;