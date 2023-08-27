// type rfce and click on enter basic outlook of app would be done 
//if we click ctrl+space on the component then it will be auto imported(import InputBox line)

import React,{useState} from 'react';
import InputBox from './inputBox';
import List from './list';

function Todo() {
    const [tasksArr,setTasks] = useState([]);
    // const handleInput=(e)=>{
    //      setValue(e.target.value);
    // }
  
    const addTask=(inputValue)=>{
       const newTask = inputValue;
       // we will never mutate a state variable on our own
       let newTaskArr = [...tasksArr,newTask];
       setTasks(newTaskArr);
       
    }

    const handleDelete = (idx) =>{
      console.log("Handle Delete",idx);
      const filteredTasks = tasksArr.filter((task,cidx)=>{
         return cidx!=idx
      })
      setTasks(filteredTasks);
    }


  
    return (
       //These two empty tags are known as react fragments
       //Fragment acts as wrapper we wrap up several elements into fragment and 
       //when we attach that to the ui fragment will be removed
  
       //In JSX we have class keyword so to avoid both conflicting with each other
       //we replace class with className
       <>     
       {/* <div className="inputbox">
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={addTask}>Add Task</button>
       </div> */}
       <InputBox addTask={addTask}></InputBox>
       {/* <div className="list"> */}
        {/* This is the way we render a list */}
        {/* <ul>
        {tasksArr.map((task)=>{
          return <li>{task}</li>
         })}
        </ul> */}
       {/* </div> */}
       <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
       </>
    )
}

export default Todo