import { useState, useEffect } from "react";
import Boxes from "../components/Boxes"

const Task = () => {
  const [toggle,setToggle] = useState(true)

  function handle(data){
    // console.log(data);
    return setToggle(data)
  }
  return (
    <div className="box-container">
      <Boxes toggle={{toggle,handle}}/>
      <Boxes toggle={{toggle,handle}}/>
    </div>
  );
};
export default Task;
