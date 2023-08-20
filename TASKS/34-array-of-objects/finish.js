/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const car_1 = {
    carBrand: 'Audi',
    price: 69000,
    isSale: true
}
const car_2 = {
    carBrand: 'BMW',
    price: 19000,
    isSale: true
}
const car_3 = {
    carBrand: 'Mercedes',
    price: 99000,
    isSale: false
}

const carsArr = [car_1, car_2, car_3]

console.log(carsArr)
