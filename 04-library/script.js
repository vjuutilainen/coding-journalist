var data = ['dog','cat','cat','dog','cat','cat', 'dog', 'dog'];

window.onload = function() {

  var pets = d3.select('.pets')
                .selectAll('img')
                .data(data)
                .enter()
                .append('img')
                .attr('src', function(d) {
                  return d + '.jpg';
                })
                .style('opacity', 0);

  pets.transition()
      .duration(1000)
      .delay(function(d, i) {
        return i * 500;
      })
      .style('opacity', 1);

};