import React,{useState} from "react"
const Details=(props)=>{
    const {pets,handleView,Delete} = props

    return(
        <div>
        <ul className="pet-list">
          {props.pets.map((pet) => (
            <li key={pet._id} className="pet-item">
              <div className="pet-container">
                <img src={pet.img} alt={pet.Name} className="pet-image" />
                <div className="pet-details">
                  <h3>{pet.Name}</h3>
                  <h4>{pet.Need}</h4>
                  <h5>{pet.category}</h5>
                  <button
                    id="Adopt"
                    onClick={() =>Delete(pet._id)}
                    className="adopt-button"
                  >
                    Adopt
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
 }
export default Details;
