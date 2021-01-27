import React, { lazy, Suspense, useState, useEffect } from "react";
import "./styles/app.scss";

const DropArea = lazy(() => import("./components/DropArea"));

const App = (props) => {
  console.log("render App");

  const [files, setFiles] = useState([]);

  const handleDrop = (f) => {
    console.log("App handleDrop is called");
    for (var i = 0; i < f.length; i++) {
      if (!f[i].name) return;
      files.push(f[i].name);
    }
    // console.log(files)
    // console.log(fileList)
    setFiles([...files]);
    console.log(files);
    // console.log(fileList)
  };
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DropArea onDrop={handleDrop}></DropArea>
      </Suspense>
      <div style={{ height: 300, width: 250 }}>
        {files.map((file) => (
          <div>{file}</div>
        ))}
      </div>
    </div>
  );
};
export default App;
