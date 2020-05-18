/*
# Programming Primer( in JS)

This is an exercise to practice basic programming principles.

##Instructions

The code of this exercise can be executed via Node.js or in the console tab of your browser 's developer tools.

1. Define an `addFavoriteBook(..)`

function that receives a single parameter, called `bookName`.

2. If the provided `bookName`
string does * NOT * have the word "Great" in it, add it to the `favoriteBooks`
array.

Hints:

    -`someString.includes(anotherString)`
will
return `true`
if `anotherString`
is found inside `someString`, or `false`
otherwise.

-
Use `!`
to negate a boolean value(change `true`
    to `false`
    or vice versa).

-
`someArray.push(value)`
will add a value to the end of the array.

3. Define a `printFavoriteBooks()`

function that receives no parameters.

4. `printFavoriteBooks()`
should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks`
array.

Hint:

    -Use the\ ` back-tick operators for strings that need to include values in them.

	- Use `
console.log(..)
` to print a message to the screen.

5. Finally, `
printFavoriteBooks()
` should loop through the `
favoriteBooks ` array and print out each value.

	Make sure to then call the `
printFavoriteBooks()
` function at the end of the program.

	Hint: Use the `
for (let..of..) {}
` style loop.

*/

function addFavoriteBook(bookName) { //Function
    if (!bookName.includes("Great")) { //! Not include Book that name has "Great" in it
        favoriteBooks.push(bookName); // push the array that dont have "Great" in it.  
    }
}

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`); // length PRINTS the # of book without "Great"
    for (let bookName of favoriteBooks) { //Loop to get all the values in the Array
        console.log(bookName); // PRINTS all the values in the Array except "Great"
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// print out favorite books
printFavoriteBooks();