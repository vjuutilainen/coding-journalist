window.onload = () => {

  const width = 200;
  const height = 200;
  const margin = 50;

  const maxRadius = 10;

  const data = [
    {valueX: 1, valueY: 1, valueR: 1},
    {valueX: 2, valueY: 2, valueR: 2},
    {valueX: 3, valueY: 3, valueR: 3}
  ];

  const svg = d3.select('svg').attr('width', width + (margin * 2)).attr('height', height + (margin * 2));

  const xScale = d3.scaleLinear().domain([0,5]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0,5]).range([height, 0]);
  const rScale = d3.scaleSqrt().domain([0,3]).range([0, maxRadius]);

  const g = svg.append('g').attr('transform', 'translate(' + margin + ',' + margin + ')');

  g.append('g')
      .attr('class', 'axisX')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale));

  g.append('g')
      .attr('class', 'axisY')
      .call(d3.axisLeft(yScale));

  g.selectAll('.point')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'point')
    .attr('cx', d => xScale(d.valueX))
    .attr('cy', d => yScale(d.valueY))
    .attr('r', d => rScale(d.valueR));

};
         