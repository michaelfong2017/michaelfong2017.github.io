import React, { useState } from "react";
import { scaleLinear, max, line, select } from "d3";

// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const Scatterplot = (props) => {
  const { selectedGroup, lineColour, positionX, positionY } = props;
  const margin = { top: 20, right: 10, bottom: 0, left: 50 };
  //   const selectedData = lineChartData.filter(
  //     (datum) => datum.group === selectedGroup
  //   );
  const width = 500 - margin.left - margin.right;
  const height = 150 - margin.top - margin.bottom;

  //the scaling functions (xScale, yScale) are common for both components
  //   const xScale = scaleLinear()
  //     .domain([0, selectedData.length - 1])
  //     .range([0, width]);

  //   const yScale = scaleLinear()
  //     .domain([0, max(selectedData, (d) => d.measure)])
  //     .range([height, 0]);

  return (
    <svg viewBox="-2 -2 100 100">
      <g transform={`translate(${positionX}, ${positionY})`}>
        <text
          textAnchor="middle"
          // style={lineSubTitleTextStyle}
          fill="lightgrey"
          x={400}
          y={400}
        >
          Performance 2012
        </text>
        <text
          textAnchor="middle"
          // style={lineTitleTextStyle}
          fill="grey"
          x={400}
          y={410}
        >
          {/* {selectedData[selectedData.length - 1].measure} */}
        </text>
      </g>
    </svg>
  );
};

export default Scatterplot;
