import React, { ChangeEvent, FormEvent, useState } from "react";
import TodoList from "../../Components/TodoList/TodoList";
import {
  CompletedTaskType,
  GetTasksPropsType,
} from "../../Models/Pages/TodoModel";
import "../../Styles/Pages/Todo.css";

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<string>>([]);
  const [completedTasks, setCompletedTasks] = useState<CompletedTaskType>(
    {} as CompletedTaskType
  );
  const [editIndex, setEditIndex] = useState<number>(-1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleEditItem = (): void => {
    const newTodoArray = [...todos];
    newTodoArray[editIndex] = todo;
    setTodos([...newTodoArray]);
    setEditIndex(-1);
    setTodo("");
    setCompletedTasks({ ...completedTasks, [todos[editIndex]]: false });
  };

  const duplicateCheck = (item: string): boolean => {
    if (
      todos?.find(
        (todoItem: string) => item?.toLowerCase() === todoItem.toLowerCase()
      )
    )
      return true;
    return false;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (editIndex >= 0) handleEditItem();
    else {
      if (todo?.trim() && !duplicateCheck(todo)) {
        setTodos([...todos, todo]);
        setTodo("");
      } else return;
    }
  };

  const handleEdit = (item: string, index: number): void => {
    setEditIndex(index);
    setTodo(item);
  };

  const completeTask = (item: string): void => {
    const newlyCompletedTasks: CompletedTaskType = { ...completedTasks };
    newlyCompletedTasks[item] = true;
    setCompletedTasks({ ...newlyCompletedTasks });
  };

  const deleteTodo = (item: string): void => {
    setTodos(todos?.filter((todo) => todo !== item));
  };

  const getTasks = (type: GetTasksPropsType): Array<string> => {
    return type === "active"
      ? todos?.filter((item: string) => !completedTasks[item])
      : todos?.filter((item: string) => completedTasks[item]);
  };

  return (
    <div className="todo">
      <div className="todo-title">Taskify</div>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Enter a Todo"
        />
        <div className="todo-button">
          <button type="submit">Go</button>
        </div>
      </form>
      {duplicateCheck(todo) && editIndex < 0 && (
        <div className="todo-error">Task already exist</div>
      )}
      <div className="todo-lists">
        <div className="todo-task">
          <div className="todo-active-title">Active Tasks</div>
          {getTasks("active")?.length > 0 && (
            <TodoList
              todos={getTasks("active")}
              completeTask={completeTask}
              completedTasks={completedTasks}
              handleEdit={handleEdit}
              deleteTodo={deleteTodo}
              editIndex={editIndex}
            />
          )}
        </div>
        <div className="todo-task">
          <div className="todo-completed-title">Completed Tasks</div>
          {getTasks("completed")?.length > 0 && (
            <TodoList
              todos={getTasks("completed")}
              completeTask={completeTask}
              completedTasks={completedTasks}
              handleEdit={handleEdit}
              deleteTodo={deleteTodo}
              editIndex={editIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
