/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues(object) {

  let sum = 0
  let sum1 = 1

  for (const key in object) {
    if (typeof object[key] === 'number') {
      sum += object[key]
    }
  }

  return sum
}

// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
