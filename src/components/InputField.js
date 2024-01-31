import React from "react";

export default function InputField() {
  return (
    <div className="d-flex justify-content-center">
      {" "}
      <section className="col-6">
        <form>
          <div class="form-group">
            <label for="taskname">task name: </label>
            <input
              type="text"
              className="form-control"
              itemID="taskName"
              placeholder="name of task ..."
            />
          </div>
        </form>
      </section>
    </div>
  );
}
