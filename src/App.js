import { useState } from "react";
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import InputField from "./components/InputField.js";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 32, name: "do home work", finished: true },
    { id: 66, name: "do chores", finished: false },
  ]);
  const [task, setTask] = useState({});
  console.log({ taskList });
  return (
    <>
      <Header />
      <br />
      <InputField />

      <hr />
      <TaskList
        tasks={taskList}
        task={task}
        setTask={setTask}
        setTaskList={setTaskList}
      />
    </>
  );
}

export default App;
