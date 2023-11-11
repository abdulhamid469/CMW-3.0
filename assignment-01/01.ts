/**
 * Question 1
 */ 

/**
 * Nodejs Typscript and VS Code installed
 */


 /**
  * Question 2
  */

let fullName: string = "Abdul Hamid"
console.log(`Hello this is ${fullName}`);


/**
 * Question 3
 */
let studentName: string = "Sahil Khan";

// Uppercase
console.log(studentName.toUpperCase());

// Lowercase
console.log(studentName.toLowerCase());

// Titlecase
console.log(`${studentName.charAt(0).toUpperCase()} ${studentName.slice(1)}`);

/**
 * Question 4
 */

// Famous Quote by Albert Einstein
const quote: string = `"Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts"`;
const authorName: string = `Winston Churchill`;

console.log(`${authorName} said, ${quote}`);

/**
 * Question 5
 */

let famous_person: string = `Winston Churchill`;
let famous_quote: string = `"Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts"`;
let txt_message: string = `${famous_person} said, ${famous_quote}`;

console.log(txt_message);


/**
 * Question 6
 */

const personName: string = "\t \t Abdul \n Hamid \t \t";
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

let favrtNum: string = `7`;
console.log(`There are seven ${favrtNum} heaven and ${favrtNum} earth`);

/**
 * Question 10
 */

let myName: string = "Abdul Hamid"
console.log(`Hello ${fullName}, would you like to learn some JavaScript Today?`);

// Quote by Muhammad Ali
const author_Name: string = `Muhammad Ali`;
const quoteMessage: string = `"He Who is Not Courageous Enough to Take Risks Will Accomplish Nothing in Life"`;

console.log(`${author_Name} said, ${quoteMessage}`);

/**
 * Question 11
 */

let frindNames: string[] = ["Shoaib", "Rasool", "Babar", "Zohaib", "Naseem"];
console.log(frindNames[0], frindNames[1], frindNames[2], frindNames[3], frindNames[4]);

/**
 * Question 12
 */

let otherFriends: string[] = ["Zahoor", "Yawar", "Wasih", "Haseeb", "Zayan"];

for(let otherName of otherFriends){
    console.log(`${otherName} is my good friends`);
}

/**
 * Question 13
 */

let myTransportCars: string[] = ["Motercyle", "Bus"];
let myTransportMessage: string[] = ["go to office", "go to home"];

for (let i in myTransportCars) {
        console.log(`${myTransportCars[i]} ${myTransportMessage[i]}`)
};

/**
 * Question 14
 */

let invitedGuest: string[] = ["Zahoor", "Noman", "Safi", "Hamid", "Rabi"];

invitedGuest.forEach(gName => {
    console.log(`Hi ${gName} I would like invite you tommarow for dinner`);
});


/**
 * Question 15 
 */

let notInvited: string = "Khuram";
console.log(`Unfortunately, ${notInvited} can't make it to the dinner.\n`);

const newGuest: string = "Bilal";
gName[gName.indexOf(notInvited)] = newGuest;

// Print updated invitations

console.log(gName);