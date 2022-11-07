import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().max(20),
  body: z.string().min(5),
});

export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  taskId: z.string().cuid(),
  title: z.string().max(20),
  body: z.string().min(5),
});

export type UpdateTaskInput = z.TypeOf<typeof updateTaskSchema>;

export const getSingleTaskSchema = z.object({
  taskId: z.string().cuid(),
});

export type getSingleTaskInput = z.TypeOf<typeof getSingleTaskSchema>;
