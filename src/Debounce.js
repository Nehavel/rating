import React from 'react'

function Debounce() {
    let timer;
    let count = 0;
    function debounceRes(value){
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(value)
        }, 500);
    }
    let thtimer = null;
    function throttleClick(event){
       if(!thtimer){
       
        console.log(count++);
        thtimer = setTimeout(() => {
            thtimer = null;
           // console.log('ppppppp')
            
        }, 1000);
       
    }}     
            

    
    return (
        <>
        <input onKeyUp={(event) => debounceRes(event?.target.value)} placeholder='type........'/>
        <button onClick={(event) => throttleClick(event)}>Throttleee</button>
        </>
    )
}

export default Debounce
