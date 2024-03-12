const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/YoutubeClone");

const userSchema = mongoose.Schema({
  username :{
    type:String,
    required:[true,"username is must for registering new user"]
  },
  password:{
    type:String,
  }

});

userSchema.plugin(plm);

module.exports = mongoose.model("user",userSchema);



