
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList);


/* Practice code

var students = ['Sasha', 'Lynn', 'Jennifer', 'Paul'];
for (var i = 0; i < students.length; i += 1) {
    document.write(students[i]);
}

*/