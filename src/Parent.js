import React, {useRef} from 'react'
import Child from './Child'

function Parent() {
  const childRef = useRef();
    const callme = (event) => {
        console.log("I'm clicked", event)
    }
    return (
      <>
      <Child value='neha' callme={(event) => callme(event)} ref={childRef}></Child>  
      <button onClick={() => childRef?.current?.getParentAlert()}>Access Child</button>
      <button onClick={() => childRef?.current?.getParentAlert22()}>Access Child2</button>
      </>
    )
}

export default Parent
