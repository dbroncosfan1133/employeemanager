import React from "react";
import NewEmployeeBtn from "../NewEmployeeBtn/NewEmployeeBtn";

function MainHero() {
  return (
    <div className="hero is-success is-bold">
      <div className="hero-body">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title">HR Employee Database</h1>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <NewEmployeeBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHero;