/**
 * Question 1
 */
/**
 * Nodejs Typscript and VS Code installed
 */
/**
 * Question 2
 */
var fullName = "Abdul Hamid";
console.log("Hello this is ".concat(fullName));
/**
 * Question 3
 */
var studentName = "Sahil Khan";
// Uppercase
console.log(studentName.toUpperCase());
// Lowercase
console.log(studentName.toLowerCase());
// Titlecase
console.log("".concat(studentName.charAt(0).toUpperCase(), " ").concat(studentName.slice(1)));
/**
 * Question 4
 */
// Famous Quote by Albert Einstein
var quote = "\"Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts\"";
var authorName = "Winston Churchill";
console.log("".concat(authorName, " said, ").concat(quote));
/**
 * Question 5
 */
var famous_person = "Winston Churchill";
var famous_quote = "\"Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts\"";
var txt_message = "".concat(famous_person, " said, ").concat(famous_quote);
console.log(txt_message);
/**
 * Question 6
 */
var personName = "\t \t Abdul \n Hamid \t \t";
console.log(personName);
console.log(personName.trim());
/**
 * Question 7
 */
// Addition
console.log(5 + 3);
// Subtraction
console.log(11 - 3);
// Multiplication
console.log(4 * 2);
// Division
console.log(16 / 2);
/**
 * Question 8
 */
console.log(5 + 3);
console.log(4 + 4);
console.log(3 + 5);
console.log(2 + 6);
/**
 * Question 9
 */
var favrtNum = "7";
console.log("There are seven ".concat(favrtNum, " heaven and ").concat(favrtNum, " earth"));
/**
 * Question 10
 */
var myName = "Abdul Hamid";
console.log("Hello ".concat(fullName, ", would you like to learn some JavaScript Today?"));
// Quote by Muhammad Ali
var author_Name = "Muhammad Ali";
var quoteMessage = "\"He Who is Not Courageous Enough to Take Risks Will Accomplish Nothing in Life\"";
console.log("".concat(author_Name, " said, ").concat(quoteMessage));
/**
 * Question 11
 */
var frindNames = ["Shoaib", "Rasool", "Babar", "Zohaib", "Naseem"];
console.log(frindNames[0], frindNames[1], frindNames[2], frindNames[3], frindNames[4]);
/**
 * Question 12
 */
var otherFriends = ["Zahoor", "Yawar", "Wasih", "Haseeb", "Zayan"];
for (var _i = 0, otherFriends_1 = otherFriends; _i < otherFriends_1.length; _i++) {
    var otherName = otherFriends_1[_i];
    console.log("".concat(otherName, " is my good friends"));
}
/**
 * Question 13
 */
var myTransportCars = ["Motercyle", "Bus"];
var myTransportMessage = ["go to office", "go to home"];
for (var i in myTransportCars) {
    console.log("".concat(myTransportCars[i], " ").concat(myTransportMessage[i]));
}
;
/**
 * Question 14
 */
var invitedFrends = ["Zahoor", "Noman", "Safi", "Hamid", "Rabi"];
invitedFrends.forEach(function (name) {
    console.log("Hi ".concat(name, " I would invites you for dinner"));
});
