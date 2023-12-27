import React from "react";
import { TaskPropType } from "../../../Models/Components/TaskModel";

const Task: React.FC<TaskPropType> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div>
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
};

export default Task;
