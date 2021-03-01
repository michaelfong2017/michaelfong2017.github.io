import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import memberData from "./MemberData"
import {
  useRecoilState,
  atom
} from "recoil";

const width = 890
const height = 400
const xAxis = d3.scaleLinear().domain([-1.5, 1.5]).range([0, width]);
const yAxis = d3.scaleLinear().domain([-0.75, 0.75]).range([height, 0]);

//Read the data
const data = memberData
  .filter((d) => {
    return d.name_ch != null && d.name_en != null;
  })
  .map((d) => {
    return {
      index: d.index,
      coord1D: d.coord1D,
      coord2D: d.coord2D,
    };
  });
console.log(data);

const selectedMembersAtom = atom({
  key: 'selectedMembers',
  default: [...Array(memberData.length).keys()].map(i => i + 1)
})

const MyScatterplot = () => {
  const svgRef = useRef(null)
  const groupRef = useRef(null)
  const xAxisRef = useRef(null)
  const yAxisRef = useRef(null)
  const bodyRef = useRef(null)
  const brushRef = useRef(null)

  const [selectedMembers, setSelectedMembers] = useRecoilState(selectedMembersAtom)

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    // append the svg object to the body of the page
    svg
      .attr("width", 1060)
      .attr("height", 520)

    const group = d3.select(groupRef.current)
    group
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(40,40)")

    // Add X axis
    d3.select(xAxisRef.current)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xAxis));

    // Add Y axis
    d3.select(yAxisRef.current).call(d3.axisLeft(yAxis));

    // Add chart body
    const body = d3.select(bodyRef.current)
    const update = body.selectAll("circle").data(data);

    const isNullPoint = (d) => {
      if (d.coord1D == null || d.coord1D == ""
        || d.coord2D == null || d.coord2D == "") {
        return true
      }
      return false
    }

    update
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xAxis(isNullPoint(d) ? 0 : d.coord1D);
      })
      .attr("cy", function (d) {
        return yAxis(isNullPoint(d) ? 0 : d.coord2D);
      })
      .attr("r", d => {
        return isNullPoint(d) ? 0 : 2
      })
      .style("fill", "#fc7f03")
      .style("opacity", 1)

    update
      .transition()
      .duration(50)
      .attr('r', function (d) {
        const selected = selectedMembers.includes(d.index)
        if (selected) {
          return isNullPoint(d) ? 0 : 4
        }
        else {
          return isNullPoint(d) ? 0 : 2
        }
      });

    update.exit().remove();

    var interval
    clearInterval(interval)
    const brushStart = () => {
      // console.log("brushStart") 
      interval = setInterval(() => brushed(), 50)
    }
    const brushEnd = () => {
      // console.log("brushEnd")
      clearInterval(interval)
      brushed()
    }

    const brushed = () => {
      const selection = brush.select(".selection")
      const x = selection.attr("x")
      const y = selection.attr("y")
      const width = selection.attr("width")
      const height = selection.attr("height")
      const top = parseInt(y)
      const right = parseInt(x) + parseInt(width)
      const bottom = parseInt(y) + parseInt(height)
      const left = parseInt(x)

      var newSelectedMembers = []
      const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }
      data.forEach(d => {
        const tolerance = 2 /* Some tolerance for the sake of tap selection */
        var selected = !isNullPoint(d)
          && xAxis(d.coord1D) >= left - tolerance && xAxis(d.coord1D) <= right + tolerance
          && yAxis(d.coord2D) >= top - tolerance && yAxis(d.coord2D) <= bottom + tolerance

        if (selected) {
          newSelectedMembers.push(d.index)
        }
      })
      if (width * height == 0) { /* Tap */
        if (newSelectedMembers.length == 0) {
          /* If 0 member is included in selection box and only tap instead of drag, */
          /* we want to select everybody (including the 3 members with undefined coordinates) */
          setSelectedMembers([...Array(memberData.length).keys()].map(i => i + 1))
        }
        else { /* When tap causes selection */
          if (!arrayEquals(selectedMembers, newSelectedMembers)) {
            setSelectedMembers(newSelectedMembers)
          }
        }
      }
      else { /* Drag */
        /* Set state only when number of selected members are different to avoid unnecessary */
        /* re-render because changing selection box without changing selection does not need re-render */
        if (!arrayEquals(selectedMembers, newSelectedMembers)) {
          setSelectedMembers(newSelectedMembers)
        }
        else {
          /* If 0 member is included in selection box and we drag, */
          /* we want to select nobody */
          if (newSelectedMembers.length == 0) {
            setSelectedMembers([])
          }
        }
      }
    }

    const brush = d3.select(brushRef.current)
    brush
      .attr("class", "brush")
      .call(
        d3.brush()
          .on("start", brushStart)
          // .on("brush", brushed) // Too slow and laggy, should use setInterval instead
          .on("end", brushEnd)
          .extent([[0, 0], [width, height]])
      )

  }, [svgRef.current, selectedMembers]);

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

// const MyScatterplot = {
//   Scatterplot, selectedMembersAtom
// }
export { MyScatterplot as default, selectedMembersAtom };
