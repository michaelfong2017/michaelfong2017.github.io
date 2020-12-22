import * as selection from "d3-selection";
import { min, extent, range, descending } from "d3-array";
import * as request from "d3-request"; // d3 submodule (contains d3.csv, d3.json, etc)

// create a Object with only the subset of functions/submodules/plugins that we need
const d3 = Object.assign(
  {},
  selection,
  {
    min,
    extent,
    range,
    descending,
  },
  request
);

function Example2() {
  d3.select("body")
    .selectAll("h2")
    .data([4, 8, 15, 16, 23, 42])
    .enter()
    .append("h2")
    .text(function (d) {
      return "I’m number " + d + "!";
    });
  return null;
}
export default Example2;
