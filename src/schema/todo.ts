import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().max(20),
  body: z.string().min(5),
});

export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>;
