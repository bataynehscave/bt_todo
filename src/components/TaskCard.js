import React from "react";

export default function TaskCard({ task, setTask, addTask }) {
  function finishTask(id){
    let task = document.getElementById(id);
    task.classList.add("border");
    task.classList.add("border-success");
    task.classList.add("text-success");
  }
  return (
    <div className="d-flex justify-content-center">
      <div class="card col-6" id={task.id}>
        <div class="card-body  d-flex justify-content-between " id="task-id">
          {task.id}- {task.name}
          <div>

            <span>
            <button onClick={()=>finishTask(task.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
              </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
