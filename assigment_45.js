"use strict";
// Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as,
// “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
let abc = "Qadeer";
console.log(`Hallow ${abc}, would you like to learn some Typescript today`);
//Question # 2
//Name Cases: Store a person’s name in a variable, and 
//then print that person’s name in lowercase, uppercase, and titlecase.
let person_name = "Qadeer afridi";
console.log(person_name.toLocaleLowerCase()); //lowercase
console.log(person_name.toUpperCase()); //uppercase
// Title case 
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
console.log(toTitleCase(person_name));
//Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author. Your output should look something like the following, 
//including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famous_scientist = "Albert Einstein";
console.log(`${famous_scientist} once said, “A person who never made a mistake never tried anything new.”`);
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
// called famous_person. Then compose your message and store it in a new variable called message.
// Print your message.
let famous_person = "Albert Einstein";
let message = "“A person who never made a mistake never tried anything new.”";
console.log(`${famous_person} once said, ${message}`);
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
//and end of the name. Make sure you use each character combination, 
//"\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
let names = "\t \n Qadeer khan \t \n";
console.log(names);
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result
// in the number 8. Be sure to enclose your operations in print statements to see the results.
let num1 = 4 + 4;
let num2 = 12 - 4;
let num3 = 4 * 2;
let num4 = 16 / 2;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
//You should create four lines that look like this: console.log(5 + 3) Your output should simply
// be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(20 - 12);
console.log(2 * 4);
console.log(32 / 4);
//Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.
let favorite_num = 8;
let fav_message = "My favorite number is: ";
console.log(`${fav_message} ${favorite_num}`);
// Question # 10, i choice below 2 prevoius program.
// In this program i use arthimatic oprator.
console.log(5 + 3);
console.log(20 - 12);
console.log(2 * 4);
console.log(32 / 4);
// In this program i add white sapce for in araible .
//let names = "\t \n Qadeer khan \t \n";
// Question # 11
let Name_jd = ["Khan", "Panjabi", "Sindhi",];
for (let i = 0; i < Name_jd.length; i++) {
    console.log(Name_jd[i]);
}
//Question # 12 
// Define an array called names with a few friends' names
let names_Array = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
// Print a personalized message to each person in the list
for (let name of Name_jd) {
    console.log(`Hello, ${name}! Hope you have a great day!`);
}
// Question # 13
// Define an array with examples of my favorite mode of transportation
let motorcycle = ["Car", "honda", "civic", "vego"];
// Loop through the array and print statements
motorcycle.forEach((transport) => {
    console.log(`I Would Like To Own a ${transport} motorcycle`);
});
// Question # 14.
let guest_list = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];
guest_list.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited for dinner`);
});
//Question 15
// Define the initial array with names of people I would like to invite to dinner
let guestList = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];
// Print the initial set of invitations
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
// Add a print statement stating the name of the guest who can't make it
const guestWhoCantMakeIt = 'Nikola Tesla';
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);
// Modify the list by replacing the guest who can't make it with a new person
const newGuest = 'Isaac Newton';
guestList[guestList.indexOf(guestWhoCantMakeIt)] = newGuest;
// Print a second set of invitation messages for the updated list
console.log('\nSending out new invitations:');
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
// Queston # 16 
// copy all code from question 15 and continue a code 
console.log(`\n Great news! we found big dinner table`);
guestList.unshift('addab');
let middleIndexed = Math.floor(guestList.length / 2);
guestList.splice(middleIndexed, 0, 'galilo');
guestList.push('clark');
console.log("\n Sending new invitation to expand guest list");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited for dinner`);
});
// Question # 17 
// copy all code from question 16 and new code add in question 17 in which we code that new table not arrive
// on time so now only two person only invited.
console.log('\n Unfortunately new table not reach at the time, so i can only invited 2 people');
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}, I’m sorry but I can’t invite you to dinner.`);
}
// Print a message to the two people still invited
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the list to confirm it's empty
console.log('\nGuest list is now empty:', guestList);
// Question # 18
// store five places in array
let places_5 = ["afghanistan", "saudi", "palestine", "Sham", "Iraq"];
// Alphapatical order
console.log(`Orginal order  ${places_5}`);
let sortedplaces_5 = [...places_5].sort();
console.log("Alphapatical order ", sortedplaces_5);
//still its orginal array
console.log("still orginal order", places_5);
//Reverse alphapatical order
let reversesortedplaces_5 = [...places_5].sort().reverse();
console.log("Reverse Alphapatical order", reversesortedplaces_5);
//show again array original postion
console.log("orginal array", places_5);
//Reverse the array list 
places_5.reverse();
console.log("reverse array order", places_5);
//reverse the order of array and back to its original position
places_5.reverse();
console.log("Reverse the poistion of array and back to its original poistion", places_5);
//again array in alphapitical order 
places_5.sort();
console.log("Again aplha order", places_5);
//again in reverse alphapitical order
places_5.sort().reverse;
console.log("Again Reverse alpha order", places_5);
// Question # 19 
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
// copy all code from question 17 and contiue code on the following manner.
console.log(`Currently we are inviting ${guestList} people for dinner`);
// Question # 20 
let cities = ["Tokyo", "Paris", "New York", "Sydney", "Rio de Janeiro"];
function printCities(city) {
    console.log("\n List of famous Cities");
    cities.forEach((famousCity) => {
        console.log(famousCity);
    });
}
printCities(cities);
//Question # 21
//They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.
let car = {
    name: "Civic",
    model: 2025,
    brand: "Honda"
};
// Question # 22
// Error of index
let myArray = [1, 2, 3, 4, 5];
console.log(myArray[10]);
// Correct Array of index
myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]);
// Question # 23.
// Conditional Test
let Car = 'subaru';
let age = 25;
let isStudent = true;
let temperature = 30;
let city = 'New York';
console.log("Is car == 'subaru'? I predict True.");
console.log(Car == 'subaru'); // True
console.log("Is car == 'honda'? I predict False.");
console.log(Car == 'honda'); // False
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // True
console.log("Is age < 18? I predict False.");
console.log(age < 18); // False
console.log("Is isStudent == true? I predict True.");
console.log(isStudent == true); // True
console.log("Is isStudent == false? I predict False.");
console.log(isStudent !== true); // False
console.log("Is temperature > 25? I predict True.");
console.log(temperature > 25); // True
console.log("Is temperature <= 25? I predict False.");
console.log(temperature <= 25); // False
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // True
console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // False
console.log("Is car != 'toyota'? I predict True.");
console.log(Car != 'toyota'); // True
console.log("Is age == 30? I predict False.");
console.log(age == 30); // False
console.log("Is temperature == 30? I predict True.");
console.log(temperature == 30); // True
console.log("Is city != 'Chicago'? I predict True.");
console.log(city != 'Chicago'); // True
console.log("Is car == 'Subaru' (case-sensitive)? I predict False.");
console.log(Car == 'Subaru'); // False
// Question # 24
let favoriteColors = ['blue', 'green', 'red'];
// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(Car == 'subaru'); // True
console.log("Is car != 'subaru'? I predict False.");
console.log(Car != 'subaru'); // False
console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // False
console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles'); // True
// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(Car.toLowerCase() == 'subaru'); // True
console.log("Is car.toLowerCase() == 'SUBARU'? I predict False.");
console.log(Car.toLowerCase() == 'SUBARU'); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True
console.log("Is age < 30? I predict True.");
console.log(age < 30); // True
console.log("Is temperature >= 30? I predict True.");
console.log(temperature >= 30); // True
console.log("Is temperature <= 25? I predict False.");
console.log(temperature <= 25); // False
// Tests using "and" and "or" operators
console.log("Is age > 20 and temperature < 40? I predict True.");
console.log(age > 20 && temperature < 40); // True
console.log("Is age > 30 or temperature > 25? I predict True.");
console.log(age > 30 || temperature > 25); // True
console.log("Is age > 30 and temperature < 25? I predict False.");
console.log(age > 30 && temperature < 25); // False
console.log("Is age < 30 or temperature > 35? I predict True.");
console.log(age < 30 || temperature > 35); // True
// Test whether an item is in an array
console.log("Is 'blue' in favoriteColors? I predict True.");
console.log(favoriteColors.includes('blue')); // True
console.log("Is 'yellow' in favoriteColors? I predict False.");
console.log(favoriteColors.includes('yellow')); // False
// Test whether an item is not in an array
console.log("Is 'purple' not in favoriteColors? I predict True.");
console.log(!favoriteColors.includes('purple')); // True
console.log("Is 'green' not in favoriteColors? I predict False.");
console.log(!favoriteColors.includes('green')); // False
// Question # 25.
let alien_colors = ['green', 'yellow', 'red'];
let alien_color = 'green';
if (alien_colors.includes(alien_color)) {
    if (alien_color === 'green') {
        console.log("You just earned 5 points!");
    }
}
// Question #  26
let Aalien_color = 'green';
if (Aalien_color === 'green') {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
let Alien_color = 'red';
if (Alien_color === 'green') {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
let aalien_color = 'yellow';
if (aalien_color === 'green') {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
// Question # 27
// for green colour 
let alie_color = "Green";
if (alie_color === "Green") {
    console.log("youn just earn 5 points");
}
else if (alie_color === "red") {
    console.log("you just earn 10 points");
}
else if (alie_color === "yellow") {
    console.log("you just earn 15 pounts");
}
// for red colour
let aline_color = "red";
if (aline_color === "Green") {
    console.log("youn just earn 5 points");
}
else if (aline_color === "red") {
    console.log("you just earn 10 points");
}
else if (aline_color === "yellow") {
    console.log("you just earn 15 pounts");
}
// for yellow colour
let aliener_color = "yellow";
if (aliener_color === "Green") {
    console.log("youn just earn 5 points");
}
else if (aliener_color === "red") {
    console.log("you just earn 10 points");
}
else if (aliener_color === "yellow") {
    console.log("you just earn 15 pounts");
}
// Question # 28
let person_age = 26;
if (person_age < 2) {
    console.log("Person is Baby");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("Person is toddler");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("Person is kid");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("Person is teenger");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("Person is adult and young man");
}
else if (person_age >= 65) {
    console.log("Person is an Elder");
}
// Question # 29
let favorite_Fruit = ["Banana", "Apple", "Mango"];
if (favorite_Fruit.includes("Banana")) {
    console.log("You really like Banana");
}
else if (favorite_Fruit.includes("Apple")) {
    console.log("You really Apple");
}
else if (favorite_Fruit.includes("Mango")) {
    console.log("You really like Mango");
}
else if (favorite_Fruit.includes("Watermelon")) {
    console.log("You really like watermelon");
}
else if (favorite_Fruit.includes("lemon")) {
    console.log("you really like lemon");
}
;
// Question # 30
let usernames = ['admin', 'Eric', 'John', 'Alice', 'Sarah'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Question # 31
let userNames = ['admin', 'Eric', 'John', 'Alice', 'Sarah'];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some user");
}
else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log(" Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
;
// Question # 32
let current_users = ['admin', 'Eric', 'John', 'Alice', 'Sarah'];
let new_users = ['john', 'Mike', 'eric', 'Tom', 'Emily'];
let current_users_lowerCase = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lowerCase.includes(new_user.toLowerCase())) {
        console.log(`the username ${new_user} has already taken. PLease Enter your new user name`);
    }
    else {
        console.log(`the username ${new_user} has available`);
    }
}
;
// Question # 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number_A of numbers) {
    if (number_A === 1) {
        console.log(`${number_A}st`);
    }
    else if (number_A === 2) {
        console.log(`${number_A}nd`);
    }
    else if (number_A === 3) {
        console.log(`${number_A}rd`);
    }
    else if (number_A === 2) {
        console.log(`${number_A}nd`);
    }
    else if (number_A === 3) {
        console.log(`${number_A}rd`);
    }
    else {
        console.log(`${number_A}th`);
    }
}
;
///// question # 34
let favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
for (let fav_Pizza of favoritePizzas) {
    console.log(`I Like ${fav_Pizza} Pizza`);
}
console.log(` I really Love Pizza`);
//// Question # 35 
let animals = ['Dog', 'Cat', 'Rabbit'];
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
//// Question # 36
function make_shirt(size, message) {
    console.log(`The Shirt Size is ${size} and the Message is it: ${message}`);
}
make_shirt("S", "I Love Typescript");
make_shirt("M", "Code Is Life");
make_shirt("L", "Keep Calm and continue code");
/// Question # 37
function make_shirtA(size = 'L', message = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and the message on it is: "${message}"`);
}
make_shirtA();
make_shirtA('Medium');
make_shirtA('Small', 'Keep Calm and continue Coding');
// Question # 38
function descripr_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
descripr_city('karachi');
descripr_city('lahore');
descripr_city('new yourk', 'USA');
// Question # 39
function city_country(City, Country) {
    return `${City}, ${Country}`;
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Washington', 'USA'));
//// Question # 40 
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album('artist1', 'title1');
let album2 = make_album('artist2', 'title2');
let album3 = make_album('artist3', 'title3');
console.log(album1);
console.log(album2);
console.log(album3);
// Question #41
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
/// Question # 42 
let magiciansS = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
function show_magiciansS(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Modify the array of magicians by adding 'the Great' to each name
make_great(magiciansS);
// Call show_magiciansS() to see that the list has been modified
show_magiciansS(magiciansS);
//// Question # 43
let originalMagicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
function show_magicianses(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great_magicians(magicians) {
    let greatMagicians = magicians.slice(); // Create a copy of the array
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = `the Great ${greatMagicians[i]}`;
    }
    return greatMagicians;
}
// Create a copy of the array and modify the copy
let greatMagicians = make_great_magicians(originalMagicians);
// Call show_magicians() with each array
console.log("Original magicians:");
show_magicianses(originalMagicians);
console.log("\nGreat magicians:");
show_magicianses(greatMagicians);
//// Question # 44
function make_sandwish(...items) {
    console.log('Sandwich order summary:');
    console.log('You have ordered a sandwich with the following items:');
    for (let item of items) {
        console.log(`-${item}`);
    }
    console.log('\n');
}
make_sandwish('Ham', 'Cheese', 'Lettuce');
make_sandwish('Turkey', 'Tomato', 'Mayo', 'Bacon');
make_sandwish('Peanut Butter', 'Jelly');
//// Question # 45
function carInfo(manufacturer, modelName, options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add other optional information to the car object
    for (let key in options) {
        car[key] = options[key];
    }
    return car;
}
// Call the function with required information and additional options
let myCar = carInfo('Toyota', 'Camry', { color: 'red', year: 2023, sunroof: true });
console.log(myCar);
