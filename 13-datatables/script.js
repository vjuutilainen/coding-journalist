const data = [
  ['1. row, column 1', '1. row, column 2'],
  ['2. row, column 1', '2. row, column 2'],
  ['3. row, column 1', '3. row, column 2']
];

window.onload = () => {

  $('#mytable').DataTable({
    data: data,
    columns: [
      { title: 'Column 1' },
      { title: 'Column 2' }
    ]
  });

};