import React from "react";

export default function InputField({ tasks, task, setTask, setTaskList }) {
  function addTask(e) {
    e.preventDefault();
    let name = document.getElementById("taskName");
    let data = {
      'id': Math.floor((Math.random() + 1) * 1000),
      'name': name.value,
      'finished': true,
    };
    if (name.value){
      tasks = setTaskList([...tasks, data]);
      name.value="";
    } else {
      return;
    }
  }

  return (
    <div className="d-flex justify-content-center">
      
      <section className="col-6">
        <form>
          <div class="form-group">
            <label for="taskname">task name: </label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              placeholder="name of task ..."
            />
            <button onClick={addTask} type="submit" id="add">
              add task
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
