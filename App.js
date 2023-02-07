// const root = document.getElementById("root")

// const el = document.createElement("img")

// el.innerText = "Welcome to react"

// el.style.color = "red"

// el.src="https://images.unsplash.com/photo-1675281362093-bbaf0e9e8c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"


// root.appendChild(el)

import React from "react"
import ReactDOM  from "react-dom/client"

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

const Header = ()=>(
    <h1>Header Variable</h1>
)

const HeaderComponent = () =>{
     let isTrue = false;
   return (<div>
            
            <Header/>
            <h1>Welcome to React !!!!</h1>
            <h2>Hello World</h2>
        </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponent/>)


 
 