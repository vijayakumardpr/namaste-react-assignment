const Shimmer = () => {
  return (
    <div className="restaurant-container">
      {Array(15)
        .fill("")
        .map((el,i) => (
          <div key={i} className="skeleton"></div>
        ))}
    </div>
  );
};

export default Shimmer;
