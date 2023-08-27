import React from 'react'

function List(props) {
    const {tasksArr,handleDelete} = props;
    return (
      <div className="List">
      {/* This is the way we render a list */}
      <ul>
        {/* to mitigate error each child in a list should have unique key property use idx */}
      {tasksArr.map((task,idx)=>{
        return <li key={idx} onClick={()=>{handleDelete(idx)}}>{task}</li>
       })}
      </ul>
     </div>
    )
}

export default List