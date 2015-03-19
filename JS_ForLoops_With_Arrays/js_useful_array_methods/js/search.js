/* JS to search "store" to return
  (1) see if item is in stock (both in or not)
  (2) print entire stock list if "list" input
  (3) quit the input with "quit"
*/



var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

do {
  search = prompt("What item are you looking for? Enter item name, 'list' for a full list of available items, or 'quit' to end the search.");
  var itemSearch = inStock.indexOf(search.toLowerCase() );
  if (itemSearch >= 0) {
    print( search + ' is in stock.')'
  }
    
  }

} while (search.toLowerCase() !== 'quit');





/*  Practice .join

var daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var daysString = daysInWeek.join(' - ');
document.write(daysString);
*/

/* Practice .concat

var currentStudents = [ 'Joan', 'John', 'Joauin'];
var newStudents = [ 'Sam', 'Traci', 'Tiago'];
var allStudents = currentStudents.concat( newStudents );
document.write(currentStudents);
document.write(newStudents);
document.write(allStudents);
*/

/* Practice .indexOf
var fruit = [ 'Apple', 'Orange', 'Pear'];
var position = fruit.indexOf('Orange');
alert(position);
*/