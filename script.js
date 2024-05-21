// Урок 8. Семинар. Циклы и массивы

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const isEven = (a) => a % 2;

for (let index = 0; index <= 10; index++) {
    if (index == 0) {
        console.log(`${index} - это ноль`);
    } else if (isEven(index) == false) {
        console.log(`${index} - четное число`);
    }
    else {
        console.log(`${index} - нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr_sliced = arr.slice(0, 3);

console.log(arr_sliced.concat(arr.slice(5, 7)));

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3



const arr2 = [];
for (let index = 0; index < 5; index++) {
    const element = Math.floor(Math.random(9) * 10);
    arr2.push(element)
}

console.log(arr2);
console.log(arr2.reduce((a, b) => a + b, 0));
console.log(Math.min(...arr2));

let flag = false;
arr2.forEach(element => {
    if (element === 3) {
        flag = true;
        return;
    }
});

if (flag == false) {
    console.log("нет в этом массиве числа 3");
}
else {
    console.log("есть в этом массиве число 3");
}

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
const arr3 = [];
for (let index = 0; index < 20; index++) {
    arr3.push("x");
    console.log(...arr3);

}