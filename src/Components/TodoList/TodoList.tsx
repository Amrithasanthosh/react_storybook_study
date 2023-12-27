import React from "react";
import ClickableIcon from "../ClickableIcons/ClickableIcons";
import { MdEdit, MdDelete, MdCheck } from "react-icons/md";
import { TodoListPropType } from "../../Models/Components/TodoListModel";
import "../../Styles/Components/TodoList.css";

const TodoList: React.FC<TodoListPropType> = ({
  todos,
  editIndex,
  completedTasks,
  completeTask,
  handleEdit,
  deleteTodo,
}) => {
  return (
    <div className="todo-list">
      {todos?.map(
        (item: string, index: number) =>
          editIndex !== index && (
            <div
              key={index}
              className={
                completedTasks[item] ? "todo-item-completed" : "todo-item"
              }
            >
              <div>{item}</div>
              <div className="todo-icons">
                {!completedTasks[item] && (
                  <ClickableIcon
                    onClick={() => completeTask(item)}
                    icon={<MdCheck />}
                  />
                )}
                <ClickableIcon
                  onClick={() => handleEdit(item, index)}
                  icon={<MdEdit />}
                />
                <ClickableIcon
                  onClick={() => deleteTodo(item)}
                  icon={<MdDelete />}
                />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TodoList;
