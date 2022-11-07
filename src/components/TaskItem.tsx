import React from "react";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import useStore from "../store";
import { UpdateTaskInput } from "../schema/todo";
import { useMutateTask } from "../hooks/useMutateTask";

export const TaskItem: React.FC = () => {
  const { editedTask } = useStore();
  const update = useStore((state) => state.updateEditedTask);
  const reset = useStore((state) => state.resetEditedTask);
  const { deleteTaskMutation } = useMutateTask();

  return <div></div>;
};
