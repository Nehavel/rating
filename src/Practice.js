import React from 'react';
import axios from 'axios'

function Practice() {
   let p1 =  axios.get('https://jsonplaceholder.typicode.com/todos/1');
   //.then(res => console.log(res)).catch(err => console.log(err))
   let p2 =  axios.get('https://jsonplaceholder.typicode.comm/todos/2');
   Promise.allSettled([p1,p2]).then(res => console.log(res)).catch(err => console.log(err))
   return (
        <>nnnnnnnnnnn
        </>
    )
}

export default Practice
