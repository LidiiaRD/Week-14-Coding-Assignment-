import React from 'react';
import { AppContext } from "../App";
import { useContext } from 'react';
import { BsStar } from "react-icons/bs";

function Star() {
   const { stars, handles1, handles2, handles3, handles4, handles5 } = useContext(AppContext);
   const { s1, s2, s3, s4, s5 } = stars;
   return (
      <div>
         <BsStar className={s1 && 'bg-yellow'} onClick={handles1} />&nbsp;
         <BsStar className={s2 && 'bg-yellow'} onClick={handles2} />&nbsp;
         <BsStar className={s3 && 'bg-yellow'} onClick={handles3} />&nbsp;
         <BsStar className={s4 && 'bg-yellow'} onClick={handles4} />&nbsp;
         <BsStar className={s5 && 'bg-yellow'} onClick={handles5} />&nbsp;

      </div>
   )
}

export default Star