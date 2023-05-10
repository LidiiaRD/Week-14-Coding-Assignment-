import React from 'react';
import { AppContext } from "../App";
import { useContext } from 'react';

function Display() {
   const { users, handleDelete } = useContext(AppContext);
   return (
      <div>

         {users.map(u => (
            <div>
               <div className="card">
                  <button onClick={() => handleDelete(u.id)} className='del-btn'>X</button>
                  <h5 className="card-title">Name : {u.name}</h5>
                  <h5 className="card-title">Movie: {u.movie}</h5>
                  <p className="card-text">Review: {u.review}</p>
                  <h5 className="card-title">Mark : {u.mark} / 5</h5>
               </div>
            </div>

         ))}


      </div>
   )
}

export default Display