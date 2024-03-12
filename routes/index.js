var express = require('express');
var router = express.Router();
const passport = require('passport');
const userModel = require("./users.js");



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  res.render('login')
})

router.get('/register', async(req, res, next) => {
 
 res.render('register.ejs')
})



router.get('/currentVideo', function (req, res, next) {
  res.render('currentVideo')
})

router.get('/upload', (req, res, next) => {
  res.render('upload')
})

router.post("/upload",)




// **********************  passport js code  **************************
//register route
router.post('/register',(req,res,next) =>{
  const userData = new userModel({
    username : req.body.username,
  });
  
  userModel.register(userData,req.body.password)
  .then( (registereduser) => {
   passport.authenticate('local')(req,res, ()=> {
     res.redirect('/');
    });
   });
});




//login route
router.post('/login',passport.authenticate('local',{
   successRedirect: '/' ,
   failureRedirect: '/login' 
}), (req, res) => {});


//logout route

router.get('/logout',(req,res,next) =>{
   req.logout( (err)=> { 
    if(err) return next(err);
   res.redirect('/')
   });
});
function isLoggedIn(req,res,next){
 if(req.isAuthenticated()){
    return next();
  }
 res.redirect('/');
}



module.exports = router;
