import { useState } from "react";

export default function Rating() {
    const [rating, setRating] = useState(Array(5).fill(0));
    const [selectedStar, setSelectedStar] = useState(null);

    function handleClick(index){
       if(index === selectedStar){
        setRating(Array(5).fill(0));
        setSelectedStar(null);
       } else {
        let selectedRating = rating.map((v,i)=> {
            return i <= index ? 1 : 0;
        });
        setRating(selectedRating);
        setSelectedStar(index);
       }
       
    }

    let displayStar = rating.map((v,i) => {
        let star;
        if(v===1 ){
           star = <Star clickedStar={() => handleClick(i)}/>
        } else {
          star =  <StarNoFill clickedStar={() => handleClick(i)} /> 
        }
        return(<div key={i}>
            {star}
        </div>)
    }
  
    );
    return (<div className="display-flex">
        {displayStar}
    </div>);
}


function Star({clickedStar}){
     return (<>
   <div className="star" onClick={clickedStar}>
   ★
   </div>
    </>);
}

function StarNoFill({clickedStar}){
    return (<>
        <div className="star" onClick={clickedStar}>
        ☆
        </div>
         </>);
}