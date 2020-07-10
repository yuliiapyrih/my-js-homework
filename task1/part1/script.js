// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let objDog = {
    name: "Bobobik",
    age: 2,
    colorWool: "silver",
    colorEyes: "yellow",
    paw: 4
};
let objHuman= {
    name: 'Yuliia',
    age: 19,
    height: 1.60,
    nationality: 'Ukrainian',
    husband: undefined
};
let objCar = {
    name: "MERCEDES-BENZ AXOR 2528 L",
    axis: 3,
    power: 279,
    brakes: "disk",
    wheelFormula: "6х2"
};
let objFlat = {
    street: 'Lazarenka',
    building : 40,
    numFlat : 23,
    city: 'Lviv',
    region : 'Frankivskiy'
};
let objBook = {
    title: 'The Goldfinch',
    author:'Donna Tartt',
    pages: 784,
    yearPublished: 2013,
    language:'English'
};
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
dogsArray =['такса','мопс','вівчарка','пудель','бульдог'];
console.log(dogsArray);

peopleArray=['Степанов Андрій','Іванов Іван','Степаненко Степан','Зеленський Володимир','Богданов Дмитро'];
console.log(peopleArray);

carsArray=['Acura','Audi','Bentley','BMW','Bugatti'];
console.log(carsArray);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let objHouse={
    placing: {city: 'Lviv', region : 'Frankivskiy', street: 'Lazarenka'},
    colorFront:['green','yellow'],
    floors: 10,
    flats: 150,
    entrance: 1 
};

let objDriver = {
    person:{name:'Bohdan', age:22 },
    categories:['B','C','D1'],
    driverLicense: true,
    driver:'taxi',
    experience: 5
} 

let objToy = {
    model: 'baby',
    characteristic: {height:0.43, range:'Zapf Creation Baby Born', color:'pink'},
    material:["Вініл", "Пластик", "Текстиль"],
    price:1700,
    seller:'Allo'
}

let objTable ={
    model:"The seating table",
    size:{height: 0.775,length:1.20,width:0.70},
    color: ['White','Ivory','Ral-9001','Ral-7044','Natural','Oak','Italian', 'Cherry', 'Wenge', 'Walnut'],
    price: 7000,
    frame:'beech'
}

let objHandbag={
    price:1700,
    handbag:{brand:"Firenze",country:'Italy',color:'black'},
    seller:'le Boutique',
    size:[0.14,0.06,0.18],
    code:'5058214'
}
// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log(users[7].status);
// - статус Максима
console.log(users[4].status);
console.log(users[users.length-1].status);
// - ім'я передостаннього об'єкту
console.log(users[users.length-2].name);
// - ім'я третього об'єкта
console.log(users[2].name);
// - вік Олега
console.log(users[6].age);
// - вік Олі
console.log(users[3].age);
console.log(users[users.length-2].age);
// - вік + ім'я 5го об'єкта
console.log(users[4].age+' '+users[4].name);
// - вік + сатус Анни
console.log(users[5].age+' '+users[5].status);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

            