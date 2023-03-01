import { useState } from "react";


const Boxes = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div
      // style={toggle.toggle ? styles : null}
      className={toggle ? "bg-black m-4 w-24 h-24 border border-black rounded-lg" : "bg-white w-24 h-24 m-4 border border-black rounded-lg"}
      onClick={() => {
        setToggle(!toggle);
      }}
    ></div>
  );
};

const Task = () => {

  return (
    <div className="flex justify-center ">
      <Boxes />
      <Boxes />
    </div>
  );
};
export default Task;
