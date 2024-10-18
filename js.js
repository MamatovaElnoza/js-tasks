
// let scores = [78,99,59,33,88,66];
// for (let i = 0; i <= scores.length-1; i++)
// {
//     if (scores[i] >= 95) {
//         console.log(`${scores[i]} Grade A`);
//     } else if (scores[i] >= 82) {
//         console.log(`${scores[i]} Grade B`);
//     } else if (scores [i]>= 76) {
//         console.log(`${scores[i]} Grade C`);
//     } else if (scores [i]>= 61) {
//         console.log(`${scores[i]} Grade D`);
//     } else if (scores [`${i}`]>= 55) {
//         console.log(`${scores[i]} Grade F`);
//     } else {
//         console.log(`${scores[i]} FAILED!`);
//     }
// }





// function myFunction(number, current = 1, results = []) { 
//     if (current > number) { 
//         return results; 
//     } 
  
//     let output = []; 
//     if (current % 3 === 0) output.push('Fizz'); 
//     if (current % 5 === 0) output.push('Buzz'); 
  
//     if (output.length === 0) { 
//         results.push(current); 
//     } else { 
//         results.push(output.join('')); 
//     } 
  
//     return myFunction(number, current + 1, results); 
// } 
  
// const fizzBuzzArray = myFunction(15); 
// console.log(fizzBuzzArray);





// function fizzBuzz(amal, num1, num2) {
//     if (amal == '%' && amal % 5 === 0) {
//         console.log('fizzbuzz');
//     }
//     else if (amal % 3 === 0) {
//         console.log('fizz');
//     }
//     else if (amal % 5 === 0) {
//         console.log('buzz');
//     }
// }
// fizzBuzz('%', 3, 5)






// let number = 10;
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log('fizzbuzz');
// }
// else if (number % 3 === 0) {
//     console.log('fizz');
// }
// else if (number % 5 === 0) {
//     console.log('buzz');
// }




// let signIn = {
//     userName: 'choyxor-girl',
//     password: '12202909'
// }
// let lol = prompt('enter your username');
// let loo = prompt('enter your password');

// if (lol === signIn.userName && loo === signIn.password) {
//     console.log('welcome to the site');
// } else if (loo != signIn.password && lol != signIn.userName) {
//     console.log('your username and password are incorrect');
//     let wrong = prompt('do you want to change your info? ("ha" if yes) ("yoq" if not)')
//     if (wrong === 'ha') {
//         console.log('enter new username on the prompt section!');
//         let newUsername = prompt('enter your new username');
//         let newUserpassword = prompt('enter your new password');
//         console.log(`  Congratulations! ${newUsername} your new info is available now! Your password is ${newUserpassword} `);
//     }
//     else {
//         console.log('your info is still the same!');
//     }
// }






// let person = {
//     userName: prompt('enter your name'),
//     userSurname: prompt('enter your surname'),
//     userAge: prompt('enter your age')
// }
// console.log(person.userName);
// console.log(person.userSurname);

// if (person.userAge >= 18) {
//     console.log('adult');
// } else if (person.userAge <= 18) {
//     console.log('teenage');
// }







// let person1 = prompt('enter ur name');

// let userName = ['islom', 'elnoza']
// userName.unshift(person1)
// console.log(userName);


// const userName = ['islomerwre','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abbos','islom','ali','Elnoza','Azizbek','Abboswetwret']

// for (let i = userName.length -1; i >= 0; i--){
//     console.log(userName[i]);
// }





// for (let number = 19; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log('fizzbuzz');
//     }
//     else if (number % 3 === 0) {
//         console.log('fizz');
//     }
//     else if (number % 5 === 0) {
//         console.log('buzz')
//     }
//     else {
//         console.log(number);
//     }
// }






// // function fizzBuzz(number) {
// //     if (number % 3 === 0 && number % 5 === 0) {
// //         console.log('fizzbuzz');
// //     }
// //     else if (number % 3 === 0) {
// //         console.log('fizz');
// //     }
// //     else if (number % 5 === 0) {
// //         console.log('buzz')
// //     }
// //     else {console.log(number);
// //     }
// // }
// // fizzBuzz(2)




// // function cacl(amal, number1, number2) {
// //     if (amal == '-') {
// //         console.log(number1 - number2);
// //     }
// //     else if (amal == '+') {
// //         console.log(number1 + number2);
// //     }
// //     else if (amal == '*') {
// //         console.log(number1 * number2);
// //     }
// //     else if (amal == '/') {
// //         console.log(number1 / number2);
// //     }
// // }
// // cacl('/', 7, 2)
// // cacl('+', 9, 2)
