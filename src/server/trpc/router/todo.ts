import { t, authedProcedure } from "../trpc";
import {
  createTaskSchema,
  updateTaskSchema,
  getSingleTaskSchema,
  deleteTaskSchema,
} from "../../../schema/todo";
