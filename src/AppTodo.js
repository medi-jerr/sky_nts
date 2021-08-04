import React, {useState} from 'react'
import Todolist from './todolist/Todolist'

function AppTodo() {
    const [title, setTitle] = useState('')
    const [list, setList] = useState([])
    const [bb, setbb] = useState('')
    

    const addItem =()=>{
       let newitem = {id: Math.random(), title:title}
    setList([...list, newitem])}

    const saveList =(id) => {
        setbb(id)
    }
    return (
        <div>
            <input type='text' value={title} onChange={e=>setTitle(e.target.value)}/>
            <button onClick={addItem}>Add</button>
            {list.map(i =>  <Todolist i={i} key={i.id} saveList={saveList}/>)}
           
        </div>
    )
}

export default AppTodo
