/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

function templateLiteral(num) {
    const isLessThenTen = num < 10
    const sqrOfNum = Math.sqrt(num)

    let result = `Число ${num}.`

    isLessThenTen ? result += ' Это число меньше 10.' : result += ' Это число больше 10.'

    result += ` Квадратный корень этого числа - ${sqrOfNum.toFixed(0)}.`

    return result
}

// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
