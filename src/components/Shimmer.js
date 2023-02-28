const Shimmer = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {Array(15)
        .fill("")
        .map((el, i) => (
          <div key={i} className=" w-64 h-64 bg-gray-400"></div>
        ))}
    </div>
  );
};

export default Shimmer;
//w-72 p-3 flex flex-col gap-2 shadow-lg overflow-hidden