import React from 'react';

import { AppContext } from "../App";
import { useContext } from 'react';

function Form() {
   const { nameRef, movieRef, reviewRef, handleSubmit } = useContext(AppContext);
   return (
      <div>
         <div>
            <label>Name</label>
            <input type='text' placeholder='Enter your name.' ref={nameRef} />
         </div>
         <div>
            <label>Movie</label>
            <input type='text' placeholder='Enter movie you like to rate.' ref={movieRef} />
         </div>
         <div>
            <label>Review</label>
            <textarea ref={reviewRef}></textarea>
         </div>
         <div>
            <button onClick={handleSubmit}>Submit</button>
         </div>
      </div>
   )
}

export default Form