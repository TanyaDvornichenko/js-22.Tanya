// Задача 1-1
// Объяви две переменные хранящие название и цену товара name и price.

// Присвой переменным следующие характеристики товара (сразу при объявлении)

// название: «Генератор защитного поля»
// цена: 1000
// Используя шаблонную строку и переменные name и price задай новой переменной firstMessage текст:

// Выбран «Генератор защитного поля», цена за штуку 1000 кредитов
// Присвой товару (price) новую цену - 2000

// Используя шаблонную строку и переменные name и price задай новой переменной secondMessage текст:

// Выбран «Генератор защитного поля», цена за штуку 2000 кредитов

const name = '«Генератор защитного поля»'; // Write code on this line
let price = 1000; // Write code on this line
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

 console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'


// Переменная price должна быть 2000
// Значение переменной 'name' должно быть равно '«Генератор защитного поля»'
// Значение переменной 'firstMessage' должно быть равно 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'
// Значение переменной 'secondMessage' должно быть равно 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'
// Ожидается использование объявления 'const' с одним пробелом перед 'name'
// Ожидается использование объявления 'const' с одним пробелом перед 'firstMessage'
// Ожидается использование объявления 'const' для 'secondMessage'
// Ожидается использование объявления 'let' для 'price'