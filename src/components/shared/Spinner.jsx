import spinner from "../../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ display: "block", width: "100px", margin: "0 auto" }}
    />
  );
}

export default Spinner;
