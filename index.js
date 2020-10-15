if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash')
const passport = require('passport');
const addLocalStrategy = require('./localPassport-config')

const app = express();

const PORT = 8080;

mongoose.connect('mongodb://localhost/ET24', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        .then(() => console.log('Conectado con MongoDB.'))
        .catch(err => console.log(err));

app.set('view engine', 'jade');
app.use('/public', express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(cookieParser(process.env.SECRET));
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialiazed: true
}));
app.use(flash());


addLocalStrategy(passport)
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  if(req.isAuthenticated()){
    res.locals = {
      user: {
        hasAdministratorPermissions: req.user.hasAdministratorPermissions
      }
    }
  }
  next();
});

app.use('/institucional', require('./routes/institucionalRouter'));
app.use('/users', require('./routes/authRouter'))

app.get('/',(req, res) => {
  res.render('inicio');
});
app.get('/historia',(req, res) => {
  res.render('historia');
});
app.get('/talleres/aleman',(req, res) => {
  res.render('talleres/aleman');
});
app.get('/talleres/club-exploradores',(req, res) => {
  res.render('talleres/clube');
});
app.get('/bi',(req, res) => {
  res.render('bi');
});

app.listen(PORT, () => {
  console.log("server escuchando en el puerto *", PORT);
});
