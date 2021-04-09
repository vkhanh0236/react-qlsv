import { Link } from "react-router-dom";


export default function Profile() {
  return (
    <>
      <Link to="/Login">
          <button className="btn btn-success " style={{ marginRight: "20px" }}>
            Logout
          </button>
        </Link>

        <Link to="/">
          <button className="btn btn-success">Home</button>
        </Link>
    </>
  );
}
