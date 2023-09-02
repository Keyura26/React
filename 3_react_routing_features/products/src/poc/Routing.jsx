import React, { useEffect, useState }  from 'react'
import {Routes,Route,Link,useParams,Navigate} from "react-router-dom"

function Routing() {
  return (
    // <div>Routing</div>
    <div style={{
        textAlign: 'center',
        marginLeft: "40vw"
    }}>
    <nav>
        {/* ul>(li>a*3) */}
        <h2>Routing Example</h2>
       <ul>
        <li><Link to="/home">Home Page</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/listing">Listing</Link></li>
       </ul>
    </nav>
    <Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/about/*" element={<About></About>}></Route>
    <Route path="/listing" element={<Listing></Listing>}></Route>
    {/* Navigation */}
    <Route path="/abc" element={<Navigate to="/home"></Navigate>}></Route>
     {/* template routes -> dynamic routes  */}
    <Route path="/users/:id/:class" element={<Users isAdmin={true}></Users>}> </Route>
     {/* path -> /* -. wild card - It matches to all we should place it at the last  */}
    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </div>
      /***
         * 1. Link -> we can work  done 
         * 3. template route / Dynamic Route  done
         * 4. redirecting  routes
         * 2. Nested Routes  
         * 5. Custom Routes 
         *          private Routes 
         *          conditional 
         * */
  )
}

function Users(props){
    console.log(props.isAdmin);
    //Hook is basically a function called by react or some other library
    let params = useParams();
    let [user, setUser] = useState(null);
    useEffect(()=>{
        (async function () {
       const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`)
       const userData = await resp.json();    
       console.log(userData);
       setUser(userData);
    })()
    },[])
    console.log("params",params);
    // return <h3>I am a user component</h3>
   return <>
    {user == null ? <h3>...loading</h3> : <>
        <h4>User Name: {user.username}</h4>
        <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
        <h4> Phone: {user.phone}</h4>
    </>}
</>
}

function Home(){
    return <h3>I am Home Page</h3>
}

function About(){
    // return <h3>I am About</h3>
    return (
        <>
            <h2>About Page</h2>
            <Routes>
                <Route path="company" element={<Company />}> </Route>
                <Route path="founders" element={<Founder></Founder>}> </Route>
            </Routes>
        </>
    )
}

function Company() {
    return <h4> We are  a good firm</h4>
}
function Founder() {
    return <h4> We are Nice People </h4>
}
function Listing(){
    return <h3>I am Listing Page</h3>
}

function PageNotFound(){
    return <h3>Page not Found</h3>
}
export default Routing