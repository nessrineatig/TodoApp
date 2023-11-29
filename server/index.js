const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const db =require("./database/mongodb")
const {save,Animal,findAll,deletebyId} = require("./database/mongodb")
console.log(deletebyId)

app.use(express.json());
app.use(cors());
app.post("/api/pets",(req,res)=>{
  const Name = req.body.Name;
  const Need = req.body.Need
  const img= req.body.img
  const category= req.body.category
  save({Name,Need,img,category}).then(()=>{
    res.status(201).send('done')
  }).catch(err=>{
    console.log(err)
  })
})





app.get("/api/pets", async (req, res) => {
  findAll().then((response)=>{
    res.status(200).json(response)
  })
  .catch((err)=>{
    res.status(404).json(err)
  })
});

app.delete("/api/pets/:id",async(req,res)=>{
  const Id= req.params.id
  try {
    deletebyId(Id);
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json('Internal Server Error');
  }
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
