import React, { lazy, Suspense, useState } from "react";
import "../styles/app.scss";

function App() {
  const [state, setState] = useState("CLICK ME");

  const HelloWorld = lazy(() => import("./HelloWorld"));
  const Example = lazy(() => import("./d3Example"));

  function MyComponent() {
    if (state == "CLICKED") {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <HelloWorld />
            <Example />
          </Suspense>
        </div>
      );
    }
    else {
        return <div>Not clicked...</div>
    }
  }

  return (
    <div>
      <MyComponent />
      <button
        onClick={() => {
          setState("CLICKED");

          import("./math").then((math) => {
            console.log(math.add(16, 26));
          });
        }}
      >
        {state}
      </button>
    </div>
  );
}
export default App;
