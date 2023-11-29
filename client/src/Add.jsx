import React ,{useState} from 'react'

const Add =({ onAdd , handleView }) => {
    const [Name,setName]=useState('')
    const [Need,setNeed]=useState('')
    const [category,setCategory]=useState('')
    const [img,setImg]=useState('')
const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNeed = (e) => {
    setNeed(e.target.value);

  };
  const handlecategory = (query) => {
    setCategory(query);
  };
  const handleImg = (e) => {
    setImg(e.target.value);
  };

  return(
    <div className="form-container">
    <div>
      <input
        type="text"
        id="nameInput"
        placeholder='Enter name'
        value={Name}
        onChange={handleName}
      />
    </div>

    <div>
      <input
        type="text"
        id="needInput"
        placeholder='Please enter the need'
        value={Need}
        onChange={handleNeed}
      />
    </div>

    <div>
      <select onChange={(e) => { handlecategory(e.target.value) }} name="category" id="category">
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
    </div>

    <div>
      <input
        type="text"
        id="imgInput"
        value={img}
        onChange={handleImg}
      />
    </div>

    <button onClick={() => onAdd({ Name, Need, category, img })} className="button">
      Add pet!
    </button>
  </div>
)
}
  export default Add 