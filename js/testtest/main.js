const popupLinks = document.querySelectorAll('.popup-link')


let unlock = true

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        const popupId = popupLinks[0].getAttribute('id').replace('to', '');
        const currentPopup = document.getElementById(popupId);

        popupLink.addEventListener("mouseover", function () {
            currentPopup.classList.remove('visually-ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыhidden')
        })
        popupLink.addEventListener("mouseout", function () {
            currentPopup.classList.add('visually-hidden')
        })
    }
}
















//  const cars = [ 'Mazda', 'Mercedes', 'Ford' ];
// cars[cars.length] = 'BMW';

// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i];
// 	console.log(car);
// }

// for (const car of cars) {
// 	console.log(car);
// }

// function getRandom(min, max) {
// 	return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(getRandom(10, 100));

// const name = 'Давид';
// const age = 17;

// function getAge() {
// 	return age;
// }

// const output = `Меня зовут ${name}, и мне ${getAge()} лет.`;
// console.log(output);

// function logIn(s, name, age, city) {
// 	console.log(s, name, age, city);
// 	return `${s[0]} ${name}${s[1]} ${age} ${s[2]}${city}${s[3]}`;
// }

// const logCity = 'Житомир';
// const logName = 'Давид';
// const logAge = 17;

// const logOut = logIn`Меня зовут${logName}, и мне${logAge}лет. Я живу в городе ${logCity}.`;

// console.log(logOut);

// Анонимная функция
// let counter = 0;

// const interval = setInterval(function() {
// 	if (counter === 10) {
// 		clearInterval(interval);
// 	} else {
// 		console.log(++counter);
// 	}
// }, 1000);

// Стрелочная функция

// const arrow = (name) => 'Привет,' + name;
// console.log(arrow(' Давид'));

// Параметры по умолчанию

// const sum = (a = 40, b = 1) => a + b; // a принимает значение 10, а b принимает параметр по умолчанию
// console.log(sum(10));

// Замыкания

// function createMember(name) {
// 	return function(lastName) {
// 		console.log(name + lastName);
// 	};
// }

// const logIn = createMember('David');
// console.log(logIn('Suharev'));
// console.log(logIn('Popov'));

//Массивы

// Найти человека по нику с помощью функции
// const people = [
// 	{ name: 'David', username: 'didao111' },
// 	{ name: 'Liana', username: 'lia12321na' },
// 	{ name: 'Petr', username: 'p19derpol' }
// ];

// const person = people.find(function(person) {
// 	return person.username === 'didao111';
// });

// console.log(person.name);

//// Найти человека по нику с помощью стрелочной функции
// const person = people.find((person) => person.username === 'p19derpol');
// console.log(person.name);

//Найти человека по нику с помощью цикла

// let findedPerson;
// for (const person of people) {
// 	if (person.username === 'p19derpol') {
// 		findedPerson = person;
// 	}
// }
// console.log(findedPerson.name);

// Создание нового измененного массива
// const upperCaseCars = cars.map (car => { 
    
//     return car.toUpperCase()
// })

// console.log(upperCaseCars)

// const nums = [1, 4, 3, 8, 0 ,6, 5]

// const pow2Nums = nums.map(num => num**2)
// console.log(pow2Nums)

// Фильтрование в массиве
// const filteredNums = pow2Nums.filter(num => {
//     return num > 10
// })
// console.log (filteredNums)
// const otherPeople = [ 
// {name: 'Grygoriy', budget: 1300},
// {name: 'Elena', budget: 7000},
// {name: 'Andrey', budget: 15000}
// ]
// const person = otherPeople.find(function(person) {
//     	return person.budget === 1300 })
// const allBudget = otherPeople
// .filter(person => person.budget > 3000)
// .reduce((acc, person) => {
//     acc += person.budget
//     return acc
//  }, 0)
//  console.log (allBudget)

//  Объект 
//  const object1 = {
//      name: 'objectForTest',
//      number: 1,
//      isImportant: true,
//     'key with some space' : 'key value',
//      nums: [1, 2, 3, 4, 5],
//      ['key_' + (3 + 5)]: 'computed key',
//      info() {
//          console.info( 'Information about object', '"', this.name,'"', ':') // "this" указывает на текущий объект
//      }
//  }
// Вывести елемент с индексом из массива в объекте
//  console.log(object1.nums[3])
 
// Создаем новые переменные, вытянув их из объекта
//  const { name, number, ['key_' + (3 + 5)]: keyFromObject} = object1
//  console.log (name, number, keyFromObject)

// Вывести функцию "info"
// object1.info()

// Вывести информацию об объекте
// for (let key in object1) {
//     if (object1.hasOwnProperty(key)){
//     console.log('key:', key)
//     console.log('value:', object1[key])
//    }
// }

//Перечисляем ключи внутри объекта
// const logger = {
//     keys() {
//         console.log('Object keys:', Object.keys(this)) //Object.keys() - возвращает массив, содержащий имена всех собственных свойств (ключей) данного объекта
//     },
//     // Перечисляем ключи, и их содержимое
//     keysAndValues(){
//         Object.keys(this).forEach( key => {
//             console.log(`'${key}': ${this[key]}`)
//         })
        
        // Если использовать "function"
        // Object.keys(this).forEach( function(key) {
            // console.log(`'${key}': ${this[key]}`)
        // }.bind(this))
//     },
//     visualHelper(top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('---Start---')
//         }
//         Object.keys(this).forEach( (key, index, array ) => {
//             console.log(`'${key}': ${this[key]}`)
//             if (between && index !== array.length - 1) {
//                 console.log('---------')
//             }
//         })
//         if (bottom) {
//             console.log ('---End---')
//         }
//     }
// }
// logger.visualHelper.call(object1, true, true, true) //Вызываем функцию

//Применяем "this" к объекту "object1" 
// const bound = logger.keys.bind(object1) //Возвращает функцию
// bound()

// logger.keys.call(object1) //Делает то же что и "bind", но вызывает функцию сразу


//Ассинхронность


// const timeout = setTimeout (() => {
//     console.log ('After Timeout')
// }, 2500)//В милисекундах
// clearTimeout(timeout) //Не выполняет функцию "timeout"

// const interval = setInterval(() => {
//     console.log ('After Interval')
// }, 1000);
// clearInterval (interval)

// // То же что и "setTimeout"
// const delay = (callback, wait = 1000) =>{
//     setInterval (callback, wait)
// }
// delay (() =>{
//     console.log('After 2 seconds')
// }, 2000)


// Promise

// const delay = (wait = 1000) =>{
//     const promise = new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve()
//             reject ('Something went wrong')
//         }, wait)
//     })
//     return promise
// }
// delay(2500)
// .then(() =>{ //Метод then() возвращает Promise. Метод может принимать два аргумента: колбэк-функции для случаев выполнения и отклонения промиса.
//     console.log ('After 2 seconds')
// })
// .catch (err => console.error(err)) //Метод catch() возвращает Promise(обещание) и работает только в случае отклонения обещания.
// .finally(() => console.log ('Finally')) // Когда Promise (обещание) был выполнен, в не зависимости успешно или с ошибкой, указанная функция будет выполнена.

// const getData = () => new Promise (resolve => resolve (
//     [1, 1, 2, 3, 5, 8, 13]
// ))

// async function asyncExam (){
//     await delay (3000)
//     const data = await getData () //await функция выполняется только после возвращения Promise значения и испоьзуется с async.
//     console.log ('Data', data)
// }
// asyncExam ()

// Работа с DOM
// const heading = document.querySelector('.heading')
// console.log(heading) // Выводит узел с данным id
// console.dir(heading) // Выводит тэг как объект со свойствами 
// // console.dir(heading.id) // Выводит id тэга
// // console.dir(heading.textContent) // Выводит текст, который внутри тэга

// // heading.textContent = 'Changed text' //  Поменяет текст внутри тэга на 'Changed text'
// // heading.style.color = 'red' // Поменяет цвет содержимого на красный используя CSS
// // heading.style.textAlign = 'center'


// function addStyles (node, text, color = 'red') {
//     node.textContent = text
// node.style.color = color
// node.style.textAlign = 'center'
// node.style.backgroundColor = 'black'
// node.style.padding = '30px'
// }

// setTimeout(() => {
//     addStyles(heading, 'Any text', 'blue' )
// }, 1500)

// setTimeout(() => {
//     addStyles(heading2, 'Another text', 'yellow' )
// }, 2000)

// setTimeout(() => {
//     addStyles(heading3, 'One more text',)
// }, 2500)

// // const heading2 = document.getElementsByClassName('h2-class')
// const heading2 = document.querySelector('.heading2')

// const heading3 = heading2.nextElementSibling // Следующий тэг после "heading2"

// const h2List = document.querySelectorAll('h2')
// // const heading3 = h2List[1]
