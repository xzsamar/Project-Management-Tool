import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data));

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #0f172a, #1e3a8a)"
      }}
    >

      <div
        style={{
          backgroundColor: "#111827",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.4)",
          textAlign: "center",
          color: "white"
        }}
      >

        <h1
          style={{
            marginBottom: "30px",
            color: "#3b82f6"
          }}
        >
          Project Management Tool
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              backgroundColor: "#1f2937",
              color: "white"
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              backgroundColor: "#1f2937",
              color: "white"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            Login
          </button>

        </form>

        <p
          style={{
            marginTop: "20px",
            color: "#d1d5db"
          }}
        >
          Don't have an account?
          {" "}

          <Link
            to="/register"
            style={{
              color: "#3b82f6",
              textDecoration: "none"
            }}
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;