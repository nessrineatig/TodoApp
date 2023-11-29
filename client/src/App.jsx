import "./App.css";
import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import Details from "./Details";
import Add from "./Add.jsx";
import Form from "./Form.jsx";
import Popup from "./pop.jsx";
import Search from "./Search.jsx";





function App() {
const [Animal,setAnimal]=useState([])
const [count,setCount] = useState(0)
const [view,setView] = useState('home')
useEffect(()=>{
  axios.get('http://localhost:8080/api/pets')
  .then((response)=>{
    setAnimal(response.data)

  }) .catch((err)=>console.log(err))
},[count])

const handleView =(view)=>{
  setView(view)
  
}

const handleAdd = async (obj)=>{
  console.log(obj)
  try {
    await axios.post('http://localhost:8080/api/pets',
    {Name:obj.Name ,Need: obj.Need, img: obj.img , category : obj.category}) 
    setCount(count+1)
    setView('home')
  } catch (error) {
    console.log(error)
    
  }
}

const Delete = async(obj)=>{
  try {
    await axios.delete(`http://localhost:8080/api/pets/${obj}`)
    console.log(obj._id)
    // setCount(count+1)
    setView('form')
  } catch (error) {
    console.log(error)
  }
}
const handleSearch = (query) => {
  console.log(query);
  var searched = Animal.filter((ele) => ele.category.includes(query));

  setAnimal(searched);
}





  return(
     <>
<div className="nav-bar">
        <h1 onClick={()=>setView('home')} >Pets Hope </h1>
        <button onClick={() => setView("add")} className="add-pet-btn">
          <h2>Add a pet</h2>
        </button> 
        <Search handleSearch={handleSearch}/>
      </div>

  {view === 'home' && <Details Delete={Delete} handleView={handleView} pets={Animal} />}
  {view === 'add' && <Add handleView={handleView} onAdd = {handleAdd}/> }
  {view === 'form' && <Form   handleView={handleView}  /> }
  {view=== 'Done' && <Popup handleView={handleView} /> }

   </>
  );
}

export default App;
