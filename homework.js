// -------------------------- Home work --------------------------
// -------------------------- Chernov Andrew--------------------------
//Циклы. Задачи:
/**
 * 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
 * 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
 * 3. Факториал числа - произведение всех натуральных чисел от 1 до nвключительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
 * 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
 * 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
 * 6. Дан объект:let list = {name: ‘denis’,work: ‘easycode’,age: 29}
 *  Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
 */
//1.
let a = "I am in the easycode";
let b = '';
for (let i = 0; i < a.length; i++) {
    b += (a[i - 1] == ' ') ? a[i].toUpperCase() : a[i];
}
console.log(b);
//2.
let c = "tseb eht ma i",
    d = '';
for (let i = c.length - 1; i >= 0; i--) {
    d += c[i];
}
console.log(d);
//3.
//!10 = 10*9*8*7*6*5*4*3*2*1
function factorial(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res *= i
        // console.log('loop', res);
    }
    return res;
}
console.log(factorial(10));
//4.
let str = 'JavaScript is a pretty good language';
let newStr = '';

for (i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        continue;
    }
    newStr += (str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
}
console.log(newStr);
//5 Чётность проверяется по остатку при делении на 2, используя оператор «деление с остатком» %: i % 2.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let odd = [];
for (let value of numbers) {
    if (value % 2 !== 0) {
        //console.log(value);
        odd.push(value);
    }
}
console.log(odd);
//6
let list = {
    name: 'Denis',
    work: 'easycode',
    age: 29
}
for (let key in list) {
    //console.log(list[key]);
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);