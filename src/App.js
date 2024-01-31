import { useState } from "react";
import Header from "./components/Header.js";
import "./App.css";

function App() {
  const { taskList, setTaskList } = useState([
    { id: 32, name: "do home work", finished: true },
    { id: 66, name: "do chores", finished: false },
  ]);
  const { task, setTask } = useState({});
  return (
    <>
      <Header />
      <taskList
        tasks={taskList}
        task={task}
        setTask={setTask}
        setTaskList={setTaskList}
      />
    </>
  );
}

export default App;
