import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import memberData from "./MemberData"

const Scatterplot = (props) => {
  const svgRef = useRef(null)
  const groupRef = useRef(null)
  const xAxisRef = useRef(null)
  const yAxisRef = useRef(null)
  const bodyRef = useRef(null)
  const brushRef = useRef(null)

  // [top, right, bottom, left]
  const [selectionRect, setSelectionRect] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })

  const width = 890
  const height = 400
  const x = d3.scaleLinear().domain([-1.5, 1.5]).range([0, width]);
  const y = d3.scaleLinear().domain([-0.75, 0.75]).range([height, 0]);

  //Read the data
  const data = memberData
    .filter((d) => {
      return d.name_ch != null && d.name_en != null;
    })
    .map((d) => {
      return {
        coord1D: d.coord1D,
        coord2D: d.coord2D,
      };
    });
  // console.log(data);

  useEffect(() => {
    // console.log("useEffect")

    const svg = d3.select(svgRef.current);
    // append the svg object to the body of the page
    svg
      .attr("width", 1060)
      .attr("height", 540)

    const group = d3.select(groupRef.current)
    group
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(40,40)")

    // Add X axis
    d3.select(xAxisRef.current)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    d3.select(yAxisRef.current).call(d3.axisLeft(y));

    // Add chart body
    const body = d3.select(bodyRef.current)
    const update = body.selectAll("circle").data(data);

    update
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.coord1D == null ? 0 : d.coord1D);
      })
      .attr("cy", function (d) {
        return y(d.coord2D == null ? 0 : d.coord2D);
      })
      .attr("r", 2)
      .style("fill", "#fc7f03")
      .style("opacity", 1)
      .on("click", (d, i) => {
        props.onChangeLegislator(i);
      })

    body.selectAll("circle")
      .transition()
      .attr('r', function (d) {
        const selected = d.coord1D != null && d.coord2D != null
          && x(d.coord1D) >= selectionRect.left && x(d.coord1D) <= selectionRect.right
          && y(d.coord2D) >= selectionRect.top && y(d.coord2D) <= selectionRect.bottom

        if (selected) {
          return 4
        }
        else {
          return 2
        }
      });

    update.exit().remove();

    const brushReset = () => {
      setSelectionRect({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      })
    }

    const brushed = () => {
      const selection = brush.select(".selection")
      const x = selection.attr("x")
      const y = selection.attr("y")
      const width = selection.attr("width")
      const height = selection.attr("height")

      setSelectionRect({
        top: parseInt(y),
        right: parseInt(x) + parseInt(width),
        bottom: parseInt(y) + parseInt(height),
        left: parseInt(x)
      })
    }

    const brushEnd = () => {
      console.log("brushEnd")
    }

    const brush = d3.select(brushRef.current)
    brush
      .attr("class", "brush")
      .call(
        d3.brush()
          .on("start", brushReset)
          .on("brush", brushed)
          .on("end", brushEnd)
          .extent([[0, 0], [width, height]])
      )

  }, [svgRef.current, selectionRect]);

  return (
    <svg ref={svgRef}>
      <g ref={groupRef}>
        <g>
          <g ref={xAxisRef}></g>
          <g ref={yAxisRef}></g>
          <ellipse stroke="black" stroke-width="1px" fill="none" rx={width / 2 * 0.95} ry={height / 2 * 0.9} cx={width / 2} cy={height / 2}></ellipse>
        </g>
        <g ref={bodyRef}>

        </g>
        <g ref={brushRef}>

        </g>
      </g>
    </svg>
  );
};

export default Scatterplot;
