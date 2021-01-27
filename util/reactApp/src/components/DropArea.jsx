import React, { useEffect, useState, useRef } from "react";

const width = 300;
const height = 300;
const borderStyle = "2px dotted #000";

const dropAreaImageStyle = {
  width,
  height,
};

const dropAreaStyle = {
  ...dropAreaImageStyle,
  border: borderStyle,
};

const DropArea = (props) => {
  const [images, setImages] = useState([]);
  const [err, setErr] = useState(false);

  const container = useRef(null);


  const handleFileChosen = async (file) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsDataURL(file);
    });
  }
  
  
  const readAllFiles = async (AllFiles) => {
    const results = await Promise.all(AllFiles.map(async (file) => {
      const fileContents = await handleFileChosen(file);
      setImages(images => [...images, fileContents]);
      return fileContents;
    }));
    return results;
  }



  const onDrop = (e) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    console.log("Files: ", files);
    const { length } = files;

    if (length === 0) {
      return false;
    }
    const fileTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    const { size, type } = files[0];

    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    if (size / 1024 / 1024 > 2) {
      setErr("File size exceeded the limit of 2MB");
      return false;
    }
    setErr(false);

    console.log(readAllFiles(Array.from(files)))

    props.onDrop(e.dataTransfer.files);
  };
  const onDragEnter = (e) => {
    console.log("onDragEnter");
    e.preventDefault();
  };
  const onDragLeave = (e) => {
    console.log("onDragLeave");
    e.preventDefault();
  };
  const onDragOver = (e) => {
    console.log("onDragOver");
    e.preventDefault();
  };

  useEffect(() => {
    console.log("DropArea useEffect is called");

    if (container.current) {
      let div = container.current;
      div.addEventListener("dragenter", onDragEnter);
      div.addEventListener("dragleave", onDragLeave);
      div.addEventListener("dragover", onDragOver);
      div.addEventListener("drop", onDrop);
    }
    return () => {
      let div = container.current;
      div.removeEventListener("dragenter", onDragEnter);
      div.removeEventListener("dragleave", onDragLeave);
      div.removeEventListener("dragover", onDragOver);
      div.removeEventListener("drop", onDrop);
    };
  }, [container.current]);

  return (
    <div>
      {err && <p>{err}</p>}
      <div style={dropAreaStyle} ref={container}>
        {images && (
          <div style={{ height: 300, width: 250 }}>
            {images.map((image) => (
              <img style={dropAreaImageStyle} src={image} />
            ))}
          </div>
        )}
      </div>
      <div className="button-wrapper">
        {images && <button onClick={() => setImages([])}>Remove</button>}
      </div>
    </div>
  );
};
export default DropArea;
