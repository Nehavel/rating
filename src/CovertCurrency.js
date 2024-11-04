import { useEffect, useState } from "react";
export default function ConvertCurrency() {
  const [value, setValue] = useState("");
  const [dol, setDol] = useState(0);
  useEffect(() => {
    let evalue = value * 100;
    setDol(evalue);
    return(()=>{
      //clear 
    })
  }, [value]);

  function handleChange(event) {
    setValue(event?.target?.value);
    console.log(event?.target?.value);
  }
  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(event) => handleChange(event)}
      />
      <div> Exhange {dol} </div>
    </>
  );
}
