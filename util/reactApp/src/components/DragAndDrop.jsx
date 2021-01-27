import React, {
  lazy,
  Suspense,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

const DragAndDrop = (props) => {
  console.log("render DragAndDrop");

  const [dragging, setDragging] = useState(false);
  const container = useRef(null);

  const handleDrag = useCallback((e) => {
    console.log("handleDrag");

    e.preventDefault();
    e.stopPropagation();
    setDragging((b) => true);
  }, []);
  const handleDragIn = useCallback((e) => {
    console.log("handleDragIn");

    e.preventDefault();
    e.stopPropagation();

    setDragging((b) => true);
  }, []);
  const handleDragOut = useCallback((e) => {
    console.log("handleDragOut");

    e.preventDefault();
    e.stopPropagation();

    setDragging((b) => false);
  }, []);
  const handleDrop = useCallback((e) => {
    console.log("handleDrop");

    e.preventDefault();
    setDragging((b) => false);
    console.log(e);
    console.log(e.dataTransfer.files);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.onHandleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, []);

  useEffect(() => {
    if (container.current) {
      console.log("DragAndDrop useEffect is called");

      if (container.current) {
        let div = container.current;
        div.addEventListener("dragenter", handleDragIn);
        div.addEventListener("dragleave", handleDragOut);
        div.addEventListener("dragover", handleDrag);
        div.addEventListener("drop", handleDrop);
      }
      return () => {
        let div = container.current;
        div.removeEventListener("dragenter", handleDragIn);
        div.removeEventListener("dragleave", handleDragOut);
        div.removeEventListener("dragover", handleDrag);
        div.removeEventListener("drop", handleDrop);
      };
    }
  }, [container.current]);

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        height: 300,
        width: 250,
      }}
      ref={container}
    >
      {dragging && (
        <div
          style={{
            border: "dashed grey 4px",
            backgroundColor: "rgba(255,255,255,.8)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              left: 0,
              textAlign: "center",
              color: "grey",
              fontSize: 36,
            }}
          >
            <div>drop here :)</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DragAndDrop;
