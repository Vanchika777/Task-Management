import API from "./api";

export const getTasks = async (token) => {

  const response = await API.get(
    "/tasks",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};

export const createTask = async (
  taskData,
  token
) => {

  const response = await API.post(
    "/tasks",
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};

export const deleteTask = async (
  taskId,
  token
) => {

  const response = await API.delete(
    `/tasks/${taskId}`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return response.data;
};

export const toggleTaskStatus = async (
  taskId,
  token
) => {

  const response = await API.patch(
    `/tasks/${taskId}/status`,
    {},
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return response.data;
};

export const updateTask = async (
  taskId,
  taskData,
  token
) => {

  const response = await API.put(
    `/tasks/${taskId}`,
    taskData,
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return response.data;
};