/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}

function shortPerson(person) {
  const {name: n, postsQuantity: p}  = person
  const {country: c, age: a, } = person.info

  return {
    n,
    c,
    a,
    p: p === undefined ? 0 : p
  }
}
// Напишите функцию "shortPerson" здесь

console.log(shortPerson(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }
