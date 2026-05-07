import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <div className="navbar">

      <h2 style={{ color: "#3b82f6" }}>
        PM Tool
      </h2>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/projects">
        Projects
      </Link>

      <Link to="/tasks">
        Tasks
      </Link>

      <div className="navbar-user">

        <span>{user?.name}</span>

        <button onClick={logoutHandler}>
          Logout
        </button>

      </div>

    </div>

  );

}

export default Navbar;