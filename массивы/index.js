//FOREACH ПОНЯТНО ВАААМ?????


// const arr = [1, 2, 3, 4,'hello']
//  arr.forEach(element => {
//     console.log(typeof element);
//  }); узнаем тип элемента через typeof


const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

 //форич перебирает массив данных и получает доступ к каждому
 //он имеет три callback функции и работает если в массиве есть значения
 // 1. element (elem) - это то что есть в массиве, допустим a b c это елементы которые есть в массиве,
 //с помощью елем можно узнать тип элемента(строка, цифра или булевые значения)
 //2. index - на каком порядковом номере находится елемент
//3. array - сам массив
//гляньте нижний пример обязательно, возможноо вам станет понятнее

 let names = ['Vanya', 'Xiao', 'Adil' ]

 names.forEach(function (elem, index, array) {
    console.log(`${elem} находится на ${index} позиция в ${array} `);
 })


//ИЗИЧНЫЙ CONCAT

//создает новый массив, в который копирует данные из других массивов и дополнительные значения.
//еще проще создал массив новый с наташей и вспомнил про своих старых друзей и добавил их тоже

let nameConcat = ['Даня', 'Миша', 'Ильгиз']

let nameTwoConcat = nameConcat.concat('Наташа');
console.log(nameTwoConcat);

//вот еще вам пример

let arrFirst = [1, 2, 3]

let arrSecond = ["A", "B", "C"]

let arrBig = arrFirst.concat(arrSecond) // обьединяет массивы 

console.log(arrBig)





// / push() - добавляет элементы в конец,
let arrPush  = [1,2,3,4];

console.log(arrPush.push(5))
console.log(arrPush)//ответ [1, 2, 3, 4, 5]

//shift - извлекает элемент из начала,
let arrShift  = [1,2,3,4];

console.log(arrShift.shift());
console.log(arrShift)//ответ вытащил 1 и остались остальные [2, 3, 4]

//pop() - извлекает элемент из конца,
let arrPop = [1,2,3,4];

console.log(arrPop.pop());//вытащил 4
console.log(arrPop)//показали че осталось [1, 2, 3]


//unshift() - добавляет элементы в начало.
let arrUnshift  = [2,3,4];

console.log(arrUnshift.unshift(1))
console.log(arrUnshift); //[1, 2, 3, 4]


//REVERSE - меняет порядок элементов на обратный. кароче переворачивает массив

let arrRever = [1, 2, 3, 4, 5];
console.log(arrRever.reverse()); // 5,4,3,2,1


//SORT - сортирует массив смотря на первую цифру 1 

let sort = [2,10,15,13,17];
console.log(sort.sort()) // [10, 13, 15, 17, 2]


// includes - ищет значение и проверяет true/false

let arrIn = [1,"jlby",2,"two"];

console.log(arrIn.includes("two")); //true





//FILTER - он ищет все элементы, на которых функция возвращения вернет true. 
//допустим нашел один элемент и продолжает свою работу искать

let arrFilter = [
    {name: 'Alisa', age: 28},
    {name: 'Oleg', age: 18},
    {name: 'Mira', age: 'не скажу'},
    {name: 'Kusya', age: 14},

] 

let filterRes = arrFilter.filter(function (item, index, array) {
    return item.age >= 18; //это значит выведи мне элементы(объекты) у которых возраст больше 18 или равно
})

console.log(filterRes);





//MAP - вызывает функцию для каждого элемента массива и возвращает 
//новое значение вместо элемента

const numMap = [1, 2, 3, 4, 5]
const numRes = numMap.map((elem, index) => elem * index) //елемент умножает на свой же индекс

console.log(numRes);


//че еще можно сделать


let arrMap = ['Vanya', 'Imya', 'Marina']

let resMap = arrMap.map(function (elem, index, array) {
    return elem[0];
})

console.log(arrMap);
console.log(resMap);




// const res = arr.find((elem) => elem.id)
// //ищет обьекты и возвращает только один и потом прекращает работу
// console.log(res);



// const res = arr.filter((elem) => typeof elem === 'string')
// console.log(res);






// SPLICE, SLICE


// let arr2 = ["teens22", "teens25", "teens27-29", "teens30-32"]


// console.log(arr2.splice(0,2)); - 0 это с чего начнет и 2 это кол-во удаленных
// console.log(arr2.splice(1,3, "jst-05"));

// let newarr = arr2.slice(0,2) - копирует элементы

// console.log(newarr);

// console.log(arr2);



// indexof, lastindexof, include - проверяет есть ли в массиве или нет true/false

// let names = ["bakir", "emir", "azim", "timur", "adil", "timur"]

// console.log(names.indexOf("timur")); выводит элементы номер, если нет этого значения выволдит -1 , ищет с начала

// console.log(names.lastIndexOf("timur")); ищет с конца и выводит первое найденное