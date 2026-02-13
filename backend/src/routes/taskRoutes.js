import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import validator from "../middlewares/validator.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/taskValidator.js";
import { requireAuth } from "../middlewares/auth.js";
import { authorizeRoles } from "../middlewares/role.js";
import { checkTaskOwnership } from "../middlewares/ownership.js";

const router = express.Router();

router.post("/",requireAuth, validator(createTaskSchema), createTask);
router.get("/", requireAuth, getAllTasks);
router.get("/:id", requireAuth, getTaskById);
router.put(
  "/:id",
  requireAuth,
  checkTaskOwnership,
  validator(updateTaskSchema),
  updateTask,
);
router.delete("/:id", requireAuth, checkTaskOwnership, deleteTask);

export default router;
