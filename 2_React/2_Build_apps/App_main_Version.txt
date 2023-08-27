import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  // const [inputValue, setValue] = useState("");

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
     <List tasksArr={tasksArr}></List>
     </>
  )
}

//rfce

function InputBox(props){

  const [inputValue, setValue] = useState("");
  const handleInput=(e)=>{
    setValue(e.target.value);
}
const addTaskChild=()=>{
  props.addTask(inputValue);
  setValue("");
}
//we have to provide access to task array to update the task array
  return (
    <div className="inputbox">
    <input type="text" value={inputValue} onChange={handleInput} />
    <button onClick={addTaskChild}>Add Task</button>
   </div>
  )
}

function List(props){
  const {tasksArr} = props;
  return (
    <div className="list">
    {/* This is the way we render a list */}
    <ul>
    {tasksArr.map((task)=>{
      return <li>{task}</li>
     })}
    </ul>
   </div>
  )
}

export default App

 // <h1>Hello React</h1>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>