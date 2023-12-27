export type TodoItemResponseType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoItemPropType = {
  rowsPerPage: number;
  isCompleted: boolean;
  all?: boolean;
};
