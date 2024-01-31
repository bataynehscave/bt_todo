import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, task, setTask, setTaskList }) {
  return (
    <div>
      {/* {console.log({ tasks })} */}
      {tasks.map((element) => {
        return <TaskCard task={element} />;
      })}
    </div>
  );
}
