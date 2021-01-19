import React, { lazy, Suspense, useState, useEffect } from "react";
import "./styles/app.scss";
import * as d3 from "d3";

const DonutComponent = lazy(() => import("./components/DonutComponent"));
const Scatterplot = lazy(() => import("./components/Scatterplot"));

const App = (props) => {
  useEffect(() => {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 610 - margin.left - margin.right,
      height = 550 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select("#Viz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    d3.csv(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_jiTlHFOZzByz7pPiBiho4jhtoYTIAXm4VZJz3mnSSjI7fo-wv0eB1GKVos3XsK-HOoqhw876N0CP/pub?gid=1897012944&single=true&output=csv",
      function (raw_data) {
        var data = raw_data.map(function (d) {
          return {
            coord1D: d.coord1D,
            coord2D: d.coord2D,
          };
        });
        console.log(data);

        // Add X axis

        var x = d3.scaleLinear().domain([-1, 1]).range([0, width]);
        svg
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear().domain([-1, 1]).range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        // Add dots
        svg
          .append("g")
          .selectAll("dot")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", function (d) {
            console.log(d)
            return x(d.coord1D == null ? 0 : d.coord1D);
          })
          .attr("cy", function (d) {
            return y(d.coord2D == null ? 0 : d.coord2D);
          })
          .attr("r", 1.5)
          .style("fill", "#fc7f03");
      }
    );
  });

  // // React hooks with common state values for all components
  // const [selectedGroup, setSelectedGroup] = useState("All");
  // const [groupColour, setGroupColour] = useState("lightgrey");

  // //function that will hook into the state to change it
  // function updateBarChart(group, colour) {
  //   setSelectedGroup(group);
  //   setGroupColour(colour);
  // }

  return (
    <div id="Viz">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <DonutComponent x={15} y={15} onChangeGroup={updateBarChart} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Scatterplot />
      </Suspense> */}
    </div>
  );
};

export default App;
