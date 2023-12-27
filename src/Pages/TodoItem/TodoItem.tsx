import React, { useEffect, useState } from "react";
import {
  TodoItemPropType,
  TodoItemResponseType,
} from "../../Models/Pages/TodoItemModel";
import "../../Styles/Pages/TodoItem.css";

const TodoItem: React.FC<TodoItemPropType> = ({
  rowsPerPage,
  isCompleted,
  all,
}) => {
  const [todos, setTodos] = useState<Array<TodoItemResponseType>>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [list, setList] = useState<TodoItemResponseType[]>([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await res.json();
    setTodos(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (all) setList(todos);
    else {
      if (isCompleted)
        setList(todos?.filter((todo: TodoItemResponseType) => todo.completed));
      else
        setList(todos?.filter((todo: TodoItemResponseType) => !todo.completed));
    }
  }, [isCompleted, todos]);

  const handlePageChange = (entityType: "prev" | "next") => {
    entityType === "prev"
      ? setPageNumber(pageNumber - 1)
      : setPageNumber(pageNumber + 1);
  };

  return (
    <div className="todo-item-list">
      {list
        ?.slice((pageNumber - 1) * rowsPerPage, pageNumber * rowsPerPage)
        ?.map((item: TodoItemResponseType) => (
          <div
            key={item?.id}
            className={item?.completed ? "todo-item-completed" : "todo-item"}
          >
            <div>{item?.title}</div>
          </div>
        ))}
      <div className="pagination">
        <div>{`Showing ${(pageNumber - 1) * rowsPerPage + 1} to ${
          pageNumber * rowsPerPage
        } of 200`}</div>
        {pageNumber > 1 && (
          <div
            onClick={() => handlePageChange("prev")}
            className="pagination-buttons"
          >
            Prev
          </div>
        )}
        <div>{pageNumber}</div>
        {200 / rowsPerPage > pageNumber && (
          <div
            onClick={() => handlePageChange("next")}
            className="pagination-buttons"
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
