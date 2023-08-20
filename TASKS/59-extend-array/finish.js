/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array{
    sum() {
        return this.reduce((accumulator, currentValue) => {
            return accumulator + currentValue})
    }
    onlyNumbers() {
        return this.filter(item => typeof item === 'number')
    }
}

const arr2 = new ExtendedArray(1,true, 'yes',2,3)
const arr1 = new ExtendedArray(10,20,30)

console.log(arr1.onlyNumbers())
console.log(arr2.onlyNumbers())

console.log(arr1.sum())
console.log(arr2.sum())

arr1.forEach((el) => console.log(el))
