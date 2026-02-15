import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import validator from "../middlewares/validator.js";
import { createTaskSchema, updateTaskSchema } from "../validators/taskValidator.js";
import { requireAuth } from "../middlewares/auth.js";
import { checkTaskOwnership } from "../middlewares/ownership.js";

const router = express.Router();

// Create a new task
router.post("/", requireAuth, validator(createTaskSchema), createTask);

// Get all tasks
router.get("/", requireAuth, getAllTasks);

// Get a task by ID
router.get("/:id", requireAuth, getTaskById);

// Update a task
router.put("/:id", requireAuth, checkTaskOwnership, validator(updateTaskSchema), updateTask);

// Delete a task
router.delete("/:id", requireAuth, checkTaskOwnership, deleteTask);

export default router;
