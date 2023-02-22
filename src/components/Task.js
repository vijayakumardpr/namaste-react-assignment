import { useState, useEffect } from "react";

const Task = () => {
  const [data, setData] = useState([]);

  function removeData(id) {
    return data.filter((el) => el.id !== id);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    setData(data.slice(0,10));
    
  }
  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
          {el.title}
          <button
            onClick={() => {
              const data = removeData(el.id)
              setData(data)
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default Task;
