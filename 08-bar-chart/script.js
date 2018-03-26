window.onload = () => {

  const width = 200;
  const height = 200;
  const margin = 50;

  const data = [
    {category: 'a', value: 1},
    {category: 'b', value: 2},
    {category: 'c', value: 3}
  ];

  const svg = d3.select('svg').attr('width', width + (margin * 2)).attr('height', height + (margin * 2));

  const xScale = d3.scaleBand().domain(['a', 'b', 'c']).rangeRound([0, width]).padding(0.05);
  const yScale = d3.scaleLinear().domain([0,3]).rangeRound([height, 0]);

  const g = svg.append('g').attr('transform', 'translate(' + margin + ',' + margin + ')');

  g.append('g')
      .attr('class', 'axisX')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale));

  g.append('g')
      .attr('class', 'axisY')
      .call(d3.axisLeft(yScale));

  g.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.category))
    .attr('y', d => yScale(d.value))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.value));

};
         