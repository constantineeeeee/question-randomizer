// function for encryption the input message
function encryptMsg(str, shift) {
  let encreptedStr = '';
   
  for (let i = 0; i < str.length; i++) {
     let charCode = str.charCodeAt(i);


     encreptedStr += String.fromCharCode((charCode + Math.pow(shift, 2) - 10  * shift + 25 - (shift - 5) **2)-5);
  }
  return encreptedStr;
}

function decryptMsg(str, shift){
  let decryptedStr = '';

  for(let i = 0; i < str.length; i++){
    let charCode = str.charCodeAt(i);

    decryptedStr += String.fromCharCode((charCode + Math.pow(shift, 2) - 10  * shift + 25 - (shift - 5) **2)+5);

  }

  return decryptedStr;
}

const questions = [
  // "A book originally costs ₱480. During a sale, it is marked 25% off. How much is the discounted price?",
  // "What is the value of: 3/4 + 2/3 ?",
  // "What is the next number in the series: 2, 4, 8, 16, ___?",
  // "Solve for x: 5x - 7 = 3x + 9",
  // "Find the area of a triangle with base 10 cm and height 6 cm.",
  // "Maria got 45 out of 60 questions correct. What percentage did she get?",
  // "If today is Monday, what day will it be 45 days from now?",
  // "What is the simple interest on ₱5,000 invested for 2 years at 6% annual interest?",
  // "What is the least common multiple of 6 and 8?",
  // "Ana is twice as old as Ben. The sum of their ages is 36. How old is Ben?",
  "What is the square root of 144?",
  "A rectangular lot is 15 meters long and 8 meters wide. What is its area?",
  "What is the value of (3^2 + 4^2)?",
  "Solve: 2x + 3 = 5x - 9",
  "A car travels 180 kilometers in 3 hours. What is its average speed?",
  "What is the value of the expression: 6 + 2 × 3?",
  "What is the perimeter of a square whose side is 9 cm?",
  "If a = 3 and b = 4, what is the value of a² + b²?",
  "What is 20% of 250?",
  "A train leaves at 2:15 PM and arrives at 5:00 PM. How long was the trip?"
];

const answers = [
  // "360",
  // "1 5/12",
  // "32",
  // "8",
  // "30",
  // "75%",
  // "Thursday",
  // "600",
  // "24",
  // "12 years old"
  "12",
  "120 square meters",
  "25",
  "4",
  "60 km/h",
  "12",
  "36 cm",
  "25",
  "50",
  "2 hours 45 minutes"
];

// const plaintext = 'Ana is twice as old as Ben. The sum of their ages is 36. How old is Ben?';
const shift = 5;
const encryptedQuestions = [];

for(let i = 0; i < questions.length; i++){
  const ciphertext = encryptMsg(questions[i], shift);
  const decipherText = decryptMsg(ciphertext, shift);

  encryptedQuestions.push(ciphertext);


  console.log("Encrypted Message:", ciphertext);
  console.log("Decrypted Message:", decipherText);
}

console.log(encryptedQuestions);


// const ciphertext = encryptMsg(questions[0], shift);
// const decipherText = decryptMsg(ciphertext, shift);

// console.log("Encrypted Message:", ciphertext)
// console.log("Decrypted Message:", decipherText);
