import React, {useState} from 'react';


function Todolist() {
    let addItem = ()=>{
       setList([...list,{task: newItem, completed: false}]);
      setNewItem('');
       console.log(list);
    };
    let alterStatus = (index) => {
        const updatedList = list.map((item,i) => index === i ? {...item, completed: !item.completed} : item );
        console.log(updatedList,index)
        setList(updatedList);
    }
    let deleteItem = (index) => {
        const updatedList = list.filter((arr,i) => i !== index );
        setList(updatedList);
        console.log(updatedList)
    }
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState('');
    let tempList = [];
    return (
        <>
        <h3>
            Todolist
        </h3>
        <div>
        <input type="text" placeholder="Add Item..." onChange={(e) => setNewItem(e.target.value)} ></input>
        <button onClick={addItem}> Add</button>
        </div>
        <div>
            LIST
            <div>
                </div>  
                   {list.map((item,index) => <div key={index}>
                   <div onClick={() => alterStatus(index)} style={{textDecoration: !!item?.completed ?  'line-through' : '', cursor: 'pointer'}}>
                    {item?.task}
                   </div>
                   <button onClick={() => deleteItem(index)}>Delete</button>
                   </div>)}
                   </div>
        </>
    )
}

export default Todolist
