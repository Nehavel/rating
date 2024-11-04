import React, {forwardRef, useImperativeHandle, useRef} from 'react'

const Child = forwardRef(({value, callme}, ref) => {
//     const childRef = useRef();
    useImperativeHandle(ref,()=> ({
        getParentAlert() {
            console.log("called from parent")
        },
        getParentAlert22() {
            console.log("called from parent22222222222")
        }

    })
)

    return (
        <div style={{cursor: 'pointer'}} onClick={() => callme('ppppp')}> 
        {value}
        </div>
        
    )
});

export default Child
