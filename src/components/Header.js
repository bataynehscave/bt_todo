import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Bootstrap</a>
          <div>
            <button>dark</button>
            <button>light</button>
          </div>
        </div>
      </nav>
    </>
  );
}
