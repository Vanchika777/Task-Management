import { Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    navigate("/dashboard");

    
  } catch (error) {

    console.log(error.response.data);

  }
};

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-[#AEE2FF]
      via-[#B5BAFF]
      to-[#D9F9DF]
      px-4
    "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white/70
        backdrop-blur-lg
        rounded-3xl
        shadow-xl
        p-8
      "
      >
        <h1
          className="
          text-4xl
          font-bold
          text-center
          text-[#6E73E8]
          mb-2
        "
        >
          Task Manager
        </h1>

        <p
          className="
          text-center
          text-gray-600
          mb-8
        "
        >
          Welcome back
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                p-3
                rounded-xl
                border
                border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-[#9FA1FF]
              "
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full
                p-3
                rounded-xl
                border
                border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-[#9FA1FF]
              "
            />

          </div>

          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              font-semibold
              bg-[#9FA1FF]
              hover:bg-[#B5BAFF]
              transition
            "
          >
            Login
          </button>

        </form>

<p className="text-center mt-6">

  Don't have an account?{" "}

        <Link
          to="/register"
          className="
          text-[#44ACFF]
          font-semibold
          hover:underline
          "
        >
          New user? Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;