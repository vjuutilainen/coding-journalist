window.onload = () => {
  
  d3.csv('data.csv').then(data => {

    let squares = d3.select('.square-container')
                    .selectAll('.square')
                    .data(data)
                    .enter()
                    .append('div')
                    .attr('class', 'square')
                    .style('background', d => parseInt(d.price) > 1000000 ? 'navy' : 'lightblue');

    squares.on('mouseover', d => {
      d3.select('.info').text(d.price + '€ ' + d.area);
    });

  });

};