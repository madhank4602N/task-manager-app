import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

export const fetchTasks = async () => {
    const result = await axios.get(API_URL);
     return result.data;
};

export const createTasks = async (taskData) => {
    const result = await axios.post(API_URL, taskData);
     return result.data;
};

export const deleteTasks = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
     return { message: "Task deleted successfully" };
};

export const getTaskById = async (id) => {
    const result = await axios.get(`${API_URL}/${id}`);
     return result.data;
};

export const updateTask = async (id, taskData) => {
    const result = await axios.put(`${API_URL}/${id}`, taskData);
     return result.data;
};