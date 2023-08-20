/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1
const MAX = 9

const myNumbers = [1, 2, 3, 5, 7, 9]

function CreateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(`Create new number ${number}!!!`)
    return number
}

function CreateNewArr(arr, min, max) {
    const updatedArr = [...arr]

    let newNumber = CreateRandomNumber(min, max)

    while (arr.includes(newNumber)) {
        newNumber = CreateRandomNumber(min, max)
    }

    updatedArr.push(newNumber)

    return updatedArr
}

const newArr = CreateNewArr(myNumbers, MIN, MAX)

console.log(newArr, myNumbers)

