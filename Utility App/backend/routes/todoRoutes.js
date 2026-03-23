import express from "express";
import {
  getTodos,
  addTodo,
  toggleTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", toggleTodo);

export default router;
