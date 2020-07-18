let input;
const numbers = [];
let total = 0;
console.log(numbers, numbers.length)

while (input !== null){
    input = prompt('Введите число');
    const wrongInput = Number.isNaN(Number(input));
    if (wrongInput) {
        alert('Введено не число, попробуйте еще раз!');
        continue;
    }
    console.log(numbers, numbers.length)
    numbers.push(Number(input));    
}
console.log(numbers, numbers.length);
for (const i of numbers) {     
        total += i;             
    }
console.log(numbers, numbers.length);   
if (numbers != false) {    
    console.log(`Общая сумма чисел равна ${total}`); 
}







// do {
//     input = prompt('Введите число');
//     const wrongInput = isNaN(input);
//     if (wrongInput) {
//         alert('Введено не число, попробуйте еще раз!');
//         continue;
//     }
//     if (input === null && numbers != false) {
//         console.log(`Общая сумма чисел равна ${total}`);
//         break;
//     }
//     else if (input === null && numbers == false) {
//         alert('Вы не введи ни одного числа');
//         break;
//     }
//     for (const i of input) {        
//         numbers.push(Number(i));
//         total += Number(i)        
//         console.log(numbers)
//         console.log (total)               
//     }    
// } while (input !== null);

