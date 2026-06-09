import { registerUser }
from "../services/authService";

import { useNavigate }
from "react-router-dom";

import { useState } from "react";

function Register() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data =
        await registerUser({

          name,
          email,
          password

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

      setError(
        error.response?.data?.message ||
        "Registration failed"
      );

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
      from-[#FE9EC7]
      via-[#B5BAFF]
      to-[#89D4FF]
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
          text-[#44ACFF]
          mb-2
          "
        >
          Create Account
        </h1>

        <p
          className="
          text-center
          text-gray-600
          mb-8
          "
        >
          Join Task Manager
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">

            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="
              w-full
              p-3
              rounded-xl
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-[#44ACFF]
              "
            />

          </div>

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
              focus:ring-[#44ACFF]
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
              focus:ring-[#44ACFF]
              "
            />

          </div>

          {error && (

            <p
              className="
              text-red-500
              text-center
              mb-4
              font-medium
              "
            >
              {error}
            </p>

          )}

          <button
            type="submit"
            className="
            w-full
            py-3
            rounded-xl
            font-semibold
            bg-[#44ACFF]
            hover:bg-[#89D4FF]
            transition
            "
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;