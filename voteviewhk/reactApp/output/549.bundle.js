(self.webpackChunkreactApp=self.webpackChunkreactApp||[]).push([[549],{9549:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});var a=r(8709),c=r(3354);const l=function(t){var e=(0,a.useRef)(null);return(0,a.useEffect)((function(){if(t.data&&e.current){var r=c.select(e.current),a={top:10,right:30,bottom:30,left:60},l=800,n=400;r.attr("width",l+a.left+a.right).attr("height",n+a.top+a.bottom).select("g").attr("transform","translate("+a.left+","+a.top+")");var o=t.data.filter((function(t){return null!=t.name_ch&&null!=t.name_en})).map((function(t){return{coord1D:t.coord1D,coord2D:t.coord2D}}));console.log(o),r.select("rect").attr("width",l+a.left+a.right).attr("height",n+a.top+a.bottom).style("opacity",0).on("click",(function(e,r){t.onChangeLegislator(null)}));var s=c.scaleLinear().domain([-1,1]).range([0,l]);r.select("g").select("g .x-axis").attr("transform","translate(0,400)").call(c.axisBottom(s));var i=c.scaleLinear().domain([-.5,.5]).range([n,0]);r.select("g").select("g .y-axis").call(c.axisLeft(i));var u=r.select("g").select("g .chart-body").attr("width",l).attr("height",n).selectAll("circle").data(o);u.enter().append("circle").attr("cx",(function(t){return console.log(t),s(null==t.coord1D?0:t.coord1D)})).attr("cy",(function(t){return i(null==t.coord2D?0:t.coord2D)})).attr("r",2).style("fill","#fc7f03").style("opacity",1).on("click",(function(e,r){t.onChangeLegislator(r)})),u.exit().remove()}}),[t.data,e.current]),a.createElement("svg",{className:"d3-component",ref:e},a.createElement("rect",{class:"svg-background"}),a.createElement("g",null,a.createElement("g",{class:"x-axis"}),a.createElement("g",{class:"y-axis"}),a.createElement("g",{class:"chart-body"})))}}}]);