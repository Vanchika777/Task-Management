import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  toggleTaskStatus,
  updateTask
}
from "../services/taskService";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
  const fetchTasks = async () => {
    try {

      const token =
        localStorage.getItem("token");

      const data =
        await getTasks(token);

      setTasks(data);
    } catch (error) {

      console.log(error);
    }
  };

  fetchTasks();
}, []);

const handleAddTask = async () => {
  try {

    const token =
      localStorage.getItem("token");

    const newTask =
      await createTask(
        {
          title,
          description
        },
        token
      );

    setTasks([
      ...tasks,
      newTask
    ]);

    setTitle("");
    setDescription("");

    setShowForm(false);

  } catch (error) {

    console.log(error);
  }
};

const handleDelete = async (
  taskId
) => {

  try {

    const token =
      localStorage.getItem("token");

    await deleteTask(
      taskId,
      token
    );

    setTasks(
      tasks.filter(
        task =>
          task._id !== taskId
      )
    );

  } catch (error) {

    console.log(error);
  }
};

const handleToggleStatus = async (
  taskId
) => {
  try {

    const token =
      localStorage.getItem("token");

    const updatedTask =
      await toggleTaskStatus(
        taskId,
        token
      );

    setTasks(

      tasks.map(task =>

        task._id === taskId
          ? updatedTask
          : task
      )
    );

  } catch (error) {

    console.log(error);
  }
};

const handleEdit = (task) => {

  setTitle(task.title);

  setDescription(
    task.description
  );

  setEditingTaskId(
    task._id
  );

  setShowForm(true);
};

const handleUpdateTask = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const updatedTask =
      await updateTask(
        editingTaskId,
        {
          title,
          description
        },
        token
      );

    setTasks(

      filteredTasks.map((task) =>

        task._id ===
        editingTaskId

          ? updatedTask

          : task
      )
    );

    setTitle("");
    setDescription("");

    setEditingTaskId(null);

    setShowForm(false);

  } catch (error) {

    console.log(error);

  }
};

    const handleLogout = () => {

      localStorage.removeItem("token");

      localStorage.removeItem("user");

      navigate("/login");

    };

    const filteredTasks = tasks.filter(
      (task) =>
        task.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );    

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#AEE2FF]
      via-[#F9F6C4]
      to-[#D9F9DF]
      p-6
      "
    >

      <div className="max-w-5xl mx-auto">
        <h1
          className="
          text-4xl
          font-bold
          mb-2
          text-[#44ACFF]
          "
        >
          Welcome Back 👋
        </h1>

        <p className="text-gray-700 mb-8">
          Manage your tasks efficiently
        </p>

  <button
    onClick={handleLogout}
    className="
    bg-[#FE9EC7]
    hover:opacity-90
    px-5
    py-2
    rounded-2xl
    font-semibold
    "
  >
    Logout
  </button>

        {/* Statistics */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mb-8
          "
        >

          <div
            className="
            bg-white/70
            backdrop-blur-lg
            rounded-3xl
            shadow-lg
            p-6
            "
          >
            <h2 className="text-lg font-semibold">
              Total Tasks
            </h2>

            <p className="text-3xl font-bold">
              {tasks.length}
            </p>
          </div>

          <div
            className="
            bg-[#D9F9DF]
            rounded-3xl
            shadow-lg
            p-6
            "
          >
            <p className="text-3xl font-bold">
              {
                tasks.filter(
                  task => task.status === "completed"
                ).length
              }
            </p>
          </div>

          <div
            className="
            bg-[#F9F6C4]
            rounded-3xl
            shadow-lg
            p-6
            "
          >
            <p className="text-3xl font-bold">
              {
                tasks.filter(
                  task => task.status === "pending"
                ).length
              }
            </p>    
          </div>

        </div>

          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-2xl
            border
            border-gray-200
            mb-6
            shadow-md
            bg-white/80
            backdrop-blur-lg
            "
          />
        {/* Add Task Button */}

      <button
        onClick={() => setShowForm(true)}
        className="
        mb-8
        bg-[#44ACFF]
        hover:bg-[#89D4FF]
        text-white
        px-6
        py-3
        rounded-2xl
        font-semibold
        transition
        "
      >
        + Add New Task
      </button> 

      {
        showForm && (
          <div
            className="
            bg-white/80
            backdrop-blur-lg
            rounded-3xl
            shadow-xl
            p-6
            mb-8
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              mb-4
              "
            >
              Add New Task
            </h2>

            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="
              w-full
              p-3
              border
              rounded-xl
              mb-4
              "
            />

            <textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="
              w-full
              p-3
              border
              rounded-xl
              mb-4
              "
            />

            <div className="flex gap-3">

            <button
              onClick={
                editingTaskId
                  ? handleUpdateTask
                  : handleAddTask
              }
              className="
              bg-[#44ACFF]
              text-white
              px-4
              py-2
              rounded-xl
              "
            >
              {
                editingTaskId
                  ? "Update Task"
                  : "Save Task"
              }
              Save task
            </button>

              <button
                onClick={() =>
                  setShowForm(false)
                }
                className="
                bg-gray-300
                px-4
                py-2
                rounded-xl
                "
              >
                Cancel
              </button>

            </div>
          </div>
        )
      }

        {/* Tasks */}

      <div className="space-y-4">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="
            bg-white/70
            backdrop-blur-lg
            rounded-3xl
            shadow-lg
            p-5
            flex
            justify-between
            items-center
            "
          >

            <div>
              <h3 className="font-bold text-lg">
                {task.title}
              </h3>

              <p
                onClick={() =>
                  handleToggleStatus(task._id)
                }
                className={
                  task.status === "completed"
                    ? "text-green-600 cursor-pointer font-semibold"
                    : "text-orange-500 cursor-pointer font-semibold"
                }
              >
                {task.status}
              </p>
            </div>
            <div className="flex gap-2">

            <button
              onClick={() =>
                handleEdit(task)
              }
              className="
              bg-[#9FA1FF]
              px-4
              py-2
              rounded-xl
              "
            >
              Edit
            </button>

              <button
                onClick={() =>
                  handleDelete(task._id)
                }
                className="
                bg-[#FE9EC7]
                px-4
                py-2
                rounded-xl
                "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
            </div>
    </div>
  );
}

export default Dashboard;