import User from '../models/user'

module.exports.getUsers = (req,res) => {
  User.find({})
  .then(users => res.send(users))
  .catch(err => res.status(500).send({message:err.message}));

};


module.exports.getUserByid = (req,res) =>{
  
}