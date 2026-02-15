// controllers/taskController.js

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Example: create task object (replace with actual DB logic)
    const task = {
      id: Date.now().toString(), // simple unique ID for example
      title,
      description,
      user: req.user.id, // assuming req.user is set by requireAuth
    };

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    // Example: fetch tasks (replace with DB logic)
    const tasks = []; 
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// Get a task by ID
export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    // Example: fetch task by ID (replace with DB logic)
    const task = { id: taskId, title: "Sample Task", description: "Sample description" };

    if (!task) return res.status(404).json({ success: false, message: "Task not found" });

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updates = req.body;

    // Example: update task logic (replace with DB logic)
    const updatedTask = { id: taskId, ...updates };

    res.status(200).json({ success: true, data: updatedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    // Example: delete task logic (replace with DB logic)
    res.status(200).json({ success: true, message: `Task ${taskId} deleted` });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
