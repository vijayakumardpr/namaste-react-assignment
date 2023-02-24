const Boxes = (props) => {
  //console.log(props.toggle.toggle);
  const styles = {
    backgroundColor: "black",
  };
  return (
    <div
      style={props.toggle.toggle ? styles : null}
      className="box"
      onClick={() => {
        props.toggle.handle(!props.toggle.toggle);
      }}
    ></div>
  );
};

export default Boxes;
