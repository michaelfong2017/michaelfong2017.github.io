import * as selection from "d3-selection";
import { format } from "d3-format";
import { scaleLinear } from "d3-scale";
import * as request from "d3-request"; // d3 submodule (contains d3.csv, d3.json, etc)

// create a Object with only the subset of functions/submodules/plugins that we need
const d3 = Object.assign(
  {},
  selection,
  {
    format,
    scaleLinear,
  },
  request
);

function Example() {
  d3.select("body")
    .selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .enter()
    .append("p")
    .text(function (d) {
      return "I’m number " + d + "!";
    });
  return null;
}
export default Example;
