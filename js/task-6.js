let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    const wrongInput = isNaN(input);
    if (wrongInput) {
        alert('Введено не число, попробуйте еще раз!');
        continue;
    }
    if (input === null && numbers != false) {
        console.log(`Общая сумма чисел равна ${total}`);
        break;
    }
    else if (input === null && numbers == false) {
        alert('Вы не введи ни одного числа');
        break;
    }
    for (const i of input) {        
        numbers.push(Number(i));
        total += Number(i)        
        console.log(numbers)
        console.log (total)               
    }    
} while (input !== null);
