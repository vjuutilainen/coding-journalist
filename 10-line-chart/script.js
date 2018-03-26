window.onload = () => {

  const width = 200;
  const height = 200;
  const margin = 50;

  const data = [
    {year: 2015, value: 5},
    {year: 2016, value: 2},
    {year: 2017, value: 4},
    {year: 2018, value: 3}
  ];

  const parseTime = d3.timeParse('%Y');
  const timeData = data.map(d => Object.assign(d, {date: parseTime(d.year)}));
  const timeExtent = d3.extent(timeData, d => d.date);

  const svg = d3.select('svg').attr('width', width + (margin * 2)).attr('height', height + (margin * 2));
  const g = svg.append('g').attr('transform', 'translate(' + margin + ',' + margin + ')');

  const xScale = d3.scaleTime().domain(timeExtent).rangeRound([0, width]);
  const yScale = d3.scaleLinear().domain([0,5]).rangeRound([height, 0]);
  const line = d3.line().x(d => xScale(d.date)).y(d => yScale(d.value));
  
  g.append('g')
      .attr('class', 'axisX')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale).ticks(3));

  g.append('g')
      .attr('class', 'axisY')
      .call(d3.axisLeft(yScale));

  g.append('path')
      .datum(timeData)
      .attr('fill', 'none')
      .attr('stroke', 'purple')
      .attr('stroke-width', 1)
      .attr('d', line);

};
         