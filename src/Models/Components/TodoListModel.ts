import { CompletedTaskType } from "../Pages/TodoModel";

export type TodoListPropType = {
  todos: Array<string>;
  editIndex: number;
  completedTasks: CompletedTaskType;
  completeTask: (item: string) => void;
  handleEdit: (item: string, index: number) => void;
  deleteTodo: (item: string) => void;
};
