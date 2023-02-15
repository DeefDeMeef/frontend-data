// Defining Margins, Heights and Widths
const margin = { top: 40, bottom: 10, left: 140, right: 20 };
const width = 1200 - margin.left - margin.right;
const height = 1200 - margin.top - margin.bottom;

const baseUrl = "https://swapi.dev/api/people/";
let allPeople = [];

async function fetchPeople(url) {
  const response = await fetch(url);
  const data = await response.json();
  allPeople = [...allPeople, ...data.results];
  if (data.next) {
    await fetchPeople(data.next);
  }
}

fetchPeople(baseUrl).then(() => {
  console.log(allPeople);
  update(allPeople);
});

const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

// Scales setup
const xscale = d3.scaleLinear().range([0, width]);
const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.4);

// Axis setup
const xAxis = d3.axisTop().scale(xscale).tickSizeOuter([0]);
const gXaxis = g.append("g").attr("class", "x axis");
const yAxis = d3.axisLeft().scale(yscale).tickSizeOuter([0]);
const gYaxis = g.append("g").attr("class", "y axis");

const colorScale = d3.scaleSequential(d3.interpolateRgb("#000000", "#FFE81F")).domain([0, 25]);

function update(data) {
  xscale.domain([0, d3.max(data, (d) => parseFloat(d.height))]);
  yscale.domain(data.map((d) => d.name));
  colorScale.domain([0, d3.max(data, (d) => parseFloat(d.height))]);

  gXaxis.transition().call(xAxis);
  gYaxis.transition().call(yAxis);

  const rect = g
    .selectAll("rect")
    .data(data, (d) => d.name)
    .join("rect")
    .transition()
    .attr("height", yscale.bandwidth())
    .attr("width", (d) => xscale(d.height))
    .attr("y", (d) => yscale(d.name))
    .attr("fill", (d, i) => colorScale(d.height));
}

d3.select("#change-data").on("change", function () {
  const checked = d3.select(this).property("checked")
  if (checked) {
    const smallPeople = allPeople.filter((d) => d.height < 187);

    update(smallPeople)
  } else {
    // Checkbox false = zet alle data terug in chart
    update(allPeople)
  }
})
