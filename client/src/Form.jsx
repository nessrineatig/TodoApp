import React ,{useState}from "react";
const Form =({handleView , Delete })=>{

        const [owner, setOwner] = useState("");
        const [number, setNumber] = useState("");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setOwner("");
            setNumber("");
        };
        
    return (
        <main className='register'>
        <h1 className='registerTitle'>Please fill this form</h1>
        <div className='registerFormContainer'>
          <form className='registerForm' onSubmit={() => handleSubmit()}>
            <label htmlFor='owner'>Owner Name</label>
            <input
              type='text'
              name='owner'
              id='owner'
              required
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
            <label htmlFor='number'>Number</label>
            <input
              type='text'
              name='number'
              id='number'
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button className='registerbtn' onClick={() => handleView('Done')}>Submit</button>
          </form>
        </div>
      </main>
    );
    };

export default Form