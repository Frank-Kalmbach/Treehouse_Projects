/* JS to search "store" to return
  (1) see if item is in stock (both in or not)
  (2) print entire stock list if "list" input
  (3) quit the input with "quit"
*/

/* Treehouse Solution */

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
  search = prompt("Search for a product in our store. Type 'list' to show all of the products and 'quit' to exit");
  search = search.toLowerCase();
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
    print(inStock.join(', '));
  } else {
    if ( inStock.indexOf(search) > -1 ){
      print('Yes, we have ' + search + ' in the store.');
    } else {
      print( search + ' is not in stock.');
    }
  }
}

/* Initial attempt prior to treehouse solution - do ... while created issues with quit showing not in stock before exiting program

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

do {
  search = prompt("What item are you looking for? Enter item name, 'list' for a full list of available items, or 'quit' to end the search.");

  if (search.toLowerCase === 'quit') {
    break;
  
  } else if (search.toLowerCase === 'list') {
    print(inStock.join(', '));
    
  } else if (itemSearch >= 0 ) {
    print( search + ' is in stock.');

  } else (itemSearch < 0) {
    print( search + ' is not in stock.');
  }

} while (search.toLowerCase() !== 'quit');

*/



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