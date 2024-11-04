import React, { useEffect, useState } from 'react'

function StonePaperGame() {
    let choices = ['Stone', 'Paper', 'Scissors'];
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [machineChoice, setMachineChoice] = useState(null);
    const [result, setResult] = useState(null);
    // function setSelectedChoice(choice){
    //     selectedChoice(choice)
    //     console.log('selected', choice)
    // }
    let getResult =  () => {
        let man = selectedChoice;
        let machine = machineChoice
        if (man === machine) {
            return 'It\'s a tie!';
          } else if (
            (man === 'Stone' && machine === 'Scissors') ||
            (man === 'Paper' && machine === 'Stone') ||
            (man === 'Scissors' && machine === 'Paper')
          ) {
            return 'You Win!';
          } else {
            return 'machine Wins!';
          }
    };
    function handleClick(choice){
        setSelectedChoice(choice);
        let generateMachineChoice = Math.floor(Math.random() * 3);
        console.log(Math.random() * 3)
        setMachineChoice(choices[generateMachineChoice]);
        
    };
    useEffect(()=>{
        let result = getResult();
        setResult(result);
        console.log(selectedChoice,machineChoice)
    },[machineChoice,selectedChoice])
    return (
        
        
        <>
        {choices.map((choice) =>  <button key={choice} onClick={() => handleClick(choice)}>{choice}</button>)}
        <div>
            User Choice: {selectedChoice}
        </div>
        <div>
            Machine Choice: {machineChoice}
        </div>
        <div>
            Result: {result}
        </div>
        </>
       
    )
}

export default StonePaperGame
