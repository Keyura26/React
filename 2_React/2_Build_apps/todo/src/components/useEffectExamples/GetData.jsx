import React,{useState,useEffect} from 'react'

function GetData() {
    const [data,setData] = useState(null);
    //after the first render useEffect will call a function
    //hook -> given react
    useEffect(
        // console.log("useEffect Ran");
        //to eliminate use effect should only return a function error we should wrap up the code into a function
        //outer function should be normal function inner function shoould be async function
        function (){
            (async () =>{
                console.log("useeffect ran");
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const user = await response.json();
                console.log(user);
                setData(user);
            })();
        },[])

    console.log("render");
    return (
    <>
            {data == null ?
                <h2>Placeholder loading the data....</h2>: 
                // <h2>Data Arrived</h2>
                <>
                <h2>Name : {data.name} </h2>
                <h2>Email: {data.email}</h2>
                <h2>User Name: {data.username}</h2>
                </>
            }
    </>
  )
  
        }


export default GetData