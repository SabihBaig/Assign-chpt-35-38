// QUESTION # 01

// var date = new Date ();

// console.log(date)

// QUESTION # 03


// const num1 = 4;
// const num2 = 16;

// add two numbers
// const sum = num1 + num2;

// display the sum
// console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// Question # 4 CALCULATOR


// var Num1  = +prompt("Enter First Value");
// var operator = prompt("Enter operator");
// var Num2 = +prompt("Enter Second Value");

// var result = calc(num1,operator,num2);

// console.log(result)

// function calc(num1,operator,num2)
// {
//     if(operator === "+"){
//         return num1 + num2
//     } else if (operator === "-"){
//         return num1 - num2
//     } else if (operator === "+"){
//         return num1 * num2
//     }else if (operator === "/"){
//         return num1/num2;

//     }
    
// }


// Question # 02
 
//  function fullname(firstName,lastName);{
//  Fullname('Sabih', 'Baig')
//  return'Sabih Baig';     
// }

// QUESTION # 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// QUESTION # 10
// var word = prompt("Enter your word")

// var check = ""
// for (var i = word.length -1; i>=0; i--)
// {
//     check +=word[i];
// }
// {
//     console.log(word[i])
// }
// if (word === check)
// {
//     console.log(word + " is a palindrom word")
// }
// else{
//     console.log(word + "is not a palindrom word")
// }

// QUESTION # 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// QUESTION # 05

// var result = Math.pow(3,7)
// console.log(result)

// QUESTION # 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSresourceS.com', 'o'));

// QUESTION # 07
// const num = Math.ceil(Math.random() * 100);
// console.log(num);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Matched');
//   else
//    console.log('Not matched, the number was '+gnum);