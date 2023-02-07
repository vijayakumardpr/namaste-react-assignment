// const root = document.getElementById("root")

// const el = document.createElement("img")

// el.innerText = "Welcome to react"

// el.style.color = "red"

// el.src="https://images.unsplash.com/photo-1675281362093-bbaf0e9e8c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"


// root.appendChild(el)

import React from "react"
import ReactDOM  from "react-dom/client"

const el = React.createElement("h1",{
    id:"title",
   style:{
    color:"red"
 }
},"Welc ome to React")

const el2 = React.createElement("h1",{
    id:"title",
   style:{
    color:"grey"
 }
},"Welcome to React2")


const container = React.createElement("div",{},[el,el2])



console.log(el);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)


   