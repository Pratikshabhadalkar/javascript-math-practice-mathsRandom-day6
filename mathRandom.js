// ✅ Task 1:
// Print the smallest number among 8, 3, 15, 1 using Math.min()
console.log(Math.min(8, 3, 15, 1));


// ✅ Task 2:
// Round these values: 4.3, 8.7, 9.5 (use round, floor, and ceil)
console.log("Round:", Math.round(4.3), Math.round(8.7), Math.round(9.5));
console.log("Floor:", Math.floor(4.3), Math.floor(8.7), Math.floor(9.5));
console.log("Ceil :", Math.ceil(4.3), Math.ceil(8.7), Math.ceil(9.5));


// ✅ Task 3:
// Generate a random number between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1);


// ✅ Task 4:
// Make a function generateOTP() that returns a 4-digit OTP
function generateOTP() {
    return Math.floor(Math.random() * 9000) + 1000; 
}
console.log(generateOTP());


// ✅ Task 5:
// Convert a negative number into positive using Math.abs()
let num = -20;
console.log(Math.abs(num));


// ✅ Task 6:
// Simulate a dice roll (1 to 6)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice Roll:", dice);
