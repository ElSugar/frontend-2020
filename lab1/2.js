/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '22 и 3.35, -2, 28, а потом 13, может 1.2 и -134' -> {min: -134, max: 28}
 */
function getMinMax(str) {
    let numbers = str.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
    // return ALL and EACH number, including float and signs +-
    let result = {
        "max": Math.max.apply(null, numbers),
        "min": Math.min.apply(null, numbers)
    };
    return result
}

module.exports = getMinMax;
