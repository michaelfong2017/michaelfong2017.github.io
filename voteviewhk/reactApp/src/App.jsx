import React, { lazy, Suspense, useState } from "react";
import "./styles/app.scss";

const DonutComponent = lazy(() => import("./components/DonutComponent"));

const App = (props) => {
  // React hooks with common state values for all components
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [groupColour, setGroupColour] = useState("lightgrey");

  //function that will hook into the state to change it
  function updateBarChart(group, colour) {
    setSelectedGroup(group);
    setGroupColour(colour);
  }

  return (
    <div>
      <svg viewBox="-2 -2 100 100" preserveAspectRatio="xMidYMid meet">
        <Suspense fallback={<div>Loading...</div>}>
          <DonutComponent x={15} y={15} onChangeGroup={updateBarChart} />
        </Suspense>
      </svg>
    </div>
  );
};

export default App;
