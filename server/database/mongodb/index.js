const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/MyPets').then(()=>console.log('connection done'))
.catch(err=>console.log(err));

  // ADD your Schema here!
  const Myschema= mongoose.Schema({
    Name: {type:String, required:true,unique:true},
    Need: String,
    img: String,
    category: String

  })

  // ADD the Model compiled from the above Schema
  let Animal= mongoose.model('Animal',Myschema)

  // ADD Functions to interact with the Schema
  let save= async (obj)=>{
    console.log(obj)
     await  Animal.insertMany(obj)
  }
  let findAll = async ()=>{
    return Animal.find({})
  }
  const deletebyId= async (id)=>{
    await Animal.findByIdAndDelete({_id: id})
  }
  

// Don't forget to export your functions!
module.exports = {
  save,
  Animal,
  findAll,
  deletebyId
  

};
