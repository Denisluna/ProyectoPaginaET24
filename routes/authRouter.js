const router = require('express').Router();
const passport = require('passport');
var User = require('../models/user');

router.get('/login', checkNotAuthenticated,(req, res) => {
  res.render('login');
});

router.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register');
});

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}));

router.post('/register', checkNotAuthenticated, async(req, res) => {
  const {name, email, password, password_confirmation} = req.body;
  const user = new User({
    name,
    email,
    password,
    password_confirmation
  });
  try {
    const savedUser = await user.save();
    req.flash('success_msg', 'Ya estas registrado, puedes iniciar sesión.')
    req.flash('userEmail', email)
    req.flash('userPass', password)
    res.redirect('/users/login');
  } catch (err) {
    var err_info = {};
    for (var attribute in err.errors) {
      if (err.errors.hasOwnProperty(attribute)) {
        err_info[attribute] = err.errors[attribute].properties['message'];
      }
    }
    const err_messages = {
      err_info,
      name,
      email,
      password,
      password_confirmation
    }
    res.render('register', {err_messages});
  }
});

router.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
})


router.get('/gestion', checkAuthenticated, checkPermissions, (req, res) => {
  console.log(req.user);
  res.render('gestion-vistas');
});

router.get('/gestion/mensajes', checkAuthenticated, checkPermissions, (req, res) => {
  res.render('gestion/messages');
})
router.get('/gestion/proyectos', checkAuthenticated, checkPermissions, (req, res) => {
  res.render('gestion/projects');
})
router.get('/gestion/usuarios', checkAuthenticated, checkPermissions, (req, res) => {
  res.render('gestion/users');
})

router.get('/perfil', checkAuthenticated, (req, res) =>{
  res.render('profile');
});


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/users/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
function checkPermissions(req, res, next) {
  console.log(req.user);
  if(req.user.hasAdministratorPermissions){
    return next();
  }
  res.redirect('/');
}


module.exports = router;
