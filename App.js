// const root = document.getElementById("root")

// const el = document.createElement("img")

// el.innerText = "Welcome to react"

// el.style.color = "red"

// el.src="https://images.unsplash.com/photo-1675281362093-bbaf0e9e8c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"


// root.appendChild(el)

import React from "react";
import ReactDOM  from "react-dom/client";
import Logo from "./images/amazon.png";
import Avatar from "./images/avatar.png";

// const el = React.createElement("h1",{
//     id:"title",
//     key:"h1",
//    style:{
//     color:"red"
//  }
// },"Welc ome to React")

// const el2 = React.createElement("h2",{
//     id:"title",
//     key:"h2",
//    style:{
//     color:"grey"
//  }
// },"Welcome to React2")


// const container = React.createElement("div",{},[el,el2])

// const header = React.createElement("h1",{},"Namaste React")

// const list1 = React.createElement("li",{key:"1"},"Home")
// const list2 = React.createElement("li",{key:"2"},"About Us")
// const list3 = React.createElement("li",{key:"3"},"Contact Us")

// const uList = React.createElement("ul",{},[list1,list2,list3])

// const container = React.createElement("div",{},[header,uList])

// const container = <h1>Welcome to React</h1>

// console.log(container)

// const header =  "vijay" // babel to react element


// console.log(header); // js object

// function foo(){
//  return "Rajaduari"
// }

//console.log(foo())

// function Dummy(){
//     return <h4 style={styles={color:"red"}}>dummy from function Component</h4>
// }


//console.log(dummy());
// const HeaderComponent = () =>{
//      let isTrue = false;
//    return (
//         <div>
//             <h1>Welcome to React !!!!</h1>
//             <h2>Hello World</h2>
//         </div>)
// }


//const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<HeaderComponent/>)


 
 //Assignment

//  const header1 = React.createElement("h1",null,"Header1")
//  const header2 = React.createElement("h2",null,"Header2")
//  const header3 = React.createElement("h3",null,"Header3")

//  const container = React.createElement("div",{
//     className:"title"
//  },[header1,header2,header3])


//type 2

// const element = (
//     <div className="title">
//         <h1>Header1</h1>
//         <h2>Header2</h2>
//         <h3>Header3</h3>
//     </div>
// )


//type 3

// const HeaderComponent1 =()=>{
//     return <div>Begining</div>
// }

// const TitleComponent = ()=>{
//     return (
//     <div className="title">
//          <HeaderComponent1/>
//          <h1>Header1</h1>
//          <h2>Header2</h2>
//          <h3>Header3</h3>
         
//      </div>
//     )
// }

const HeaderComponent = () => {
    return (
        <div className="navbar">
            <img src={Logo} className="logo" alt="logo"/>
            <input placeholder="Search Items"/>
            <img src={Avatar} className="avatar" alt="myProfile"/>
        </div>
    )
}

 const root =  ReactDOM.createRoot(document.getElementById("root"))

 root.render(<HeaderComponent/>)