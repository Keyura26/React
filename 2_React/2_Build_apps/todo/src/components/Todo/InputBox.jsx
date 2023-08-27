import React,{useState} from 'react'

function InputBox(props) {
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

export default InputBox