// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let person={
    name:"Yuliia",
    age: 19,
    education:true
};
let phone={
    model:'Xiaomi Redmi Note 7',
    price:4200,
    color:'black'
};
let car = {
    power: 279,
    brakes: "disk",
    wheelFormula: "6х2"
};
let flat = {
    street: 'Lazarenka',
    building : 40,
    numFlat : 23
};
let book = {
    title: 'The Goldfinch',
    author:'Donna Tartt',
    pages: 784
};
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let house={
    placing: {city: 'Lviv', region : 'Frankivskiy', street: 'Lazarenka'},
    colorFront:['green','yellow'],
    floors: 10,
    flats: 150,
    entrance: 1 
};

let driver = {
    person:{name:'Bohdan', age:22 },
    categories:['B','C','D1'],
    driverLicense: true,
    driver:'taxi',
    experience: 5
} 

let toy = {
    model: 'baby',
    characteristic: {height:0.43, range:'Zapf Creation Baby Born', color:'pink'},
    material:["Вініл", "Пластик", "Текстиль"],
    price:1700,
    seller:'Allo'
}

let table ={
    model:"The seating table",
    size:{height: 0.775,length:1.20,width:0.70},
    color: ['White','Ivory','Ral-9001','Ral-7044','Natural','Oak','Italian', 'Cherry', 'Wenge', 'Walnut'],
    price: 7000,
    frame:'beech'
}

let handbag={
    price:1700,
    handbag:{brand:"Firenze",country:'Italy',color:'black'},
    seller:'le Boutique',
    size:[0.14,0.06,0.18],
    code:'5058214'
}
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (const key in person) {
    console.log(key);
}
for (const key in phone) {
    console.log(key);
}
for (const key in car) {
    console.log(key);
}
for (const key in flat) {
    console.log(key);
}
for (const key in book) {
    console.log(key);
}
for (const key in house) {
    console.log(key);
}
for (const key in driver) {
    console.log(key);
}
for (const key in toy) {
    console.log(key);
}
for (const key in table) {
    console.log(key);
}
for (const key in handbag) {
    console.log(key);
}
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(person));
console.log(Object.keys(phone));
console.log(Object.keys(car));
console.log(Object.keys(flat));
console.log(Object.keys(book));
console.log(Object.keys(house));
console.log(Object.keys(driver));
console.log(Object.keys(toy));
console.log(Object.keys(table));
console.log(Object.keys(handbag));
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars=[
    {model:'audi',year:2003,power:1.3,color:'black'},
    {model:'Bentley',year:1999,power:2.4,color:'silver'},
    {model:'Bugatti',year:2010,power:1.7,color:'white'},
    {model:'BMW',year:2009,power:2.0,color:'cherry'},
    {model:'Богдан',year:1995,power:1.4,color:'yellow'},
    {model:'Volkswagen',year:2001,power:1.6,color:'blue'},
    {model:'ВАЗ (Lada)',year:1994,power:1.0,color:'red'},
    {model:'Volvo',year:1998,power:1.5,color:'brown'},
    {model:'Cadillac',year:2000,power:2.1,color:'pink'},
    {model:'КАМАЗ',year:1993,power:1.0,color:'gold'}
];
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities=[
    {name:'Macau',population:652000,country:'China',region:'Asia'},
    {name:'Singapore',population:4117700,country:'Singapore',region:'Asia'},
    {name:'London',population:8908081,country:'England',region:'London'},
    {name:'Paris',population:4118081,country:'France',region:'Île-de-France'},
    {name:'Dubai',population:3286620,country:'United Arab Emirates',region:'Dubai'}
];
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let carsWithDriver=[
    {model:'audi',year:2003,power:1.3,color:'black',driver:{name:'Denys',year:19,kind:'males',experience:1}},
    {model:'Bentley',year:1999,power:2.4,color:'silver',driver:{name:'Olga',year:23,kind:'female',experience:5}},
    {model:'Bugatti',year:2010,power:1.7,color:'white',driver:{name:'Oleh',year:32,kind:'males',experience:7}},
    {model:'BMW',year:2009,power:2.0,color:'cherry',driver:{name:'Rostik',year:52,kind:'males',experience:20}},
    {model:'Богдан',year:1995,power:1.4,color:'yellow',driver:{name:'Bohdan',year:22,kind:'males',experience:4}}
];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
let i=0;
while(i<cars.length)
{
    console.log(cars[i]);
    i++;
}
i=0;
while(i<cities.length)
{
    console.log(cities[i]);
    i++;
}
i=0;
while(i<carsWithDriver.length)
{
    console.log(carsWithDriver[i]);
    i++;
}
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
for (let i = 0; i < carsWithDriver.length; i++) {
    console.log(carsWithDriver[i]);
}
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (const value of cars) {
    console.log(value);
}
for (const value of cities) {
    console.log(value);
}
for (const value of carsWithDriver) {
    console.log(value);
}
// - взять объекты из задания 1 и превратить каждый в json.
let jsonPerson=JSON.stringify(person);
console.log(jsonPerson);
let jsonPhone=JSON.stringify(phone);
console.log(jsonPhone);
let jsonCar=JSON.stringify(car);
console.log(jsonCar);
let jsonFlat=JSON.stringify(flat);
console.log(jsonFlat);
let jsonBook=JSON.stringify(book);
console.log(jsonBook);
// - взять json из задания 11 и превратить их обратно в объекты.
let parsedPerson=JSON.parse(jsonPerson);
console.log(parsedPerson);
let parsedPhone=JSON.parse(jsonPhone);
console.log(parsedPhone);
let parsedCar=JSON.parse(jsonCar);
console.log(parsedCar);
let parsedFlat=JSON.parse(jsonFlat);
console.log(parsedFlat);
let parsedBook=JSON.parse(jsonBook);
console.log(parsedBook);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (let i = 0; i < cars.length; i++) {
    console.log(JSON.stringify(cars[i]));
}
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (let i = 0; i < cities.length; i++) {
    console.log(JSON.stringify(cities[i]));
}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let jsonCarsWithDriver=[];
for (let i = 0; i < carsWithDriver.length; i++) {
    jsonCarsWithDriver[i]=JSON.stringify(carsWithDriver[i]);
}
console.log(jsonCarsWithDriver);
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
let user=[
    {name:'Andriy',age:23,skills:['js','java']},
    {name:'Yuliia',age:19,skills:['html','css']},
    {name:'Roman',age:18,skills:['c++','c']},
    {name:'',age:28,skills:['js','java','python','html']},
    {name:'',age:23,skills:['ruby','Pascal','mongo']}
];
let allUserSkills=[];
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
    for (let j = 0; j < user[i].skills.length; j++) {
        allUserSkills.push(user[i].skills[j]);
    }
}
console.log(allUserSkills);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
    for (let j = 0; j < user[i].skills.length; j++) {
        console.log(user[i].skills[j]);
    }
}

let users1 = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users1 за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let address=[];
for (let i = 0; i < users1.length; i++) {
   address[i]=users1[i].address;
}
console.log(address);

// - За допомоги циклу проітерувати  масив users1, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (let i = 0; i< users1.length; i++) { 
    let users1Div=document.createElement('div');
    users1Div.style.fontSize='20px';
    users1Div.style.margin='20px';
    users1Div.style.background='silver';
    users1Div.innerHTML='name: ' + users1[i].name +'<br> age: ' + users1[i].age +'<br> status: '+ users1[i].status+'<br> address: <br> city: '+users1[i].address.city+'<br> country: '+users1[i].address.country+'<br> street: '+users1[i].address.street+'<br> house: '+users1[i].address.houseNumber;
    document.body.appendChild(users1Div);
}
// - За допомоги циклу проітерувати  масив users1, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (let i = 0; i< users1.length; i++) { 
    let users1Div=document.createElement('div');
    users1Div.style.fontSize='20px';
    users1Div.style.margin='20px';
    users1Div.style.background='silver';
    let nameDiv=document.createElement('div');
    nameDiv.innerHTML='name: ' + users1[i].name;
    let ageDiv=document.createElement('div');
    ageDiv.innerHTML='age: ' + users1[i].age;
    let statusDiv=document.createElement('div');
    statusDiv.innerHTML='status: '+ users1[i].status;
    let addressDiv=document.createElement('div');
    addressDiv.innerHTML='address: <br> city: '+users1[i].address.city+'<br> country: '+users1[i].address.country+'<br> street: '+users1[i].address.street+'<br> house: '+users1[i].address.houseNumber;
    users1Div.appendChild(nameDiv);
    users1Div.appendChild(ageDiv);
    users1Div.appendChild(statusDiv);
    users1Div.appendChild(addressDiv);
    document.body.appendChild(users1Div);
}
// - За допомоги циклу проітерувати  масив users1, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i< users1.length; i++) { 
    let users1Div=document.createElement('div');
    users1Div.style.fontSize='20px';
    users1Div.style.margin='20px';
    users1Div.style.background='silver';
    let nameDiv=document.createElement('div');
    nameDiv.innerHTML='name: ' + users1[i].name;
    let ageDiv=document.createElement('div');
    ageDiv.innerHTML='age: ' + users1[i].age;
    let statusDiv=document.createElement('div');
    statusDiv.innerHTML='status: '+ users1[i].status;
    let addressDiv=document.createElement('div');
    addressDiv.innerHTML='address:';
    let cityDiv=document.createElement('div');
    cityDiv.innerHTML='city: '+users1[i].address.city;
    let countryDiv=document.createElement('div');
    countryDiv.innerHTML='country: '+users1[i].address.country;
    let streetDiv=document.createElement('div');
    streetDiv.innerHTML='street: '+users1[i].address.street;
    let houseDiv=document.createElement('div');
    houseDiv.innerHTML='house: '+users1[i].address.houseNumber;
    addressDiv.appendChild(cityDiv);
    addressDiv.appendChild(countryDiv);
    addressDiv.appendChild(streetDiv);
    addressDiv.appendChild(houseDiv);
    users1Div.appendChild(nameDiv);
    users1Div.appendChild(ageDiv);
    users1Div.appendChild(statusDiv);
    users1Div.appendChild(addressDiv);
    document.body.appendChild(users1Div);
}



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false}, 
    {id: 2, name: 'petya', age: 30, status: true}, 
    {id: 3, name: 'kolya', age: 29, status: true}, 
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'}, 
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
    {user_id: 2, country: 'Poland', city: 'Krakow'}, 
    {user_id: 4, country: 'USA', city: 'Miami'}];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
let usersWithCities=[];
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id===citiesWithId[j].user_id) {
            usersWithCities[i]=usersWithId[i];
            usersWithCities[i]['address']=citiesWithId[j];
        }
    }
}
console.log(usersWithCities);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
let blockDiv=document.createElement('div');
blockDiv.id='idElem';
blockDiv.classList.add('classElem');
blockDiv.innerHTML='- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу';
document.body.appendChild(blockDiv);
let idElem=document.getElementById('idElem');
console.log(idElem.innerText);
let classElem=document.getElementsByClassName('classElem');
console.log(classElem[0].innerText);
let tagElem=document.getElementsByTagName('div');
console.log(tagElem[tagElem.length-1].innerText);
// - змінити цей текст використовуючи селектори id, class,  tag
idElem.innerText='- змінити цей текст використовуючи селектори id, class,  tag';
classElem[0].innerText='- змінити цей текст використовуючи ';
tagElem[tagElem.length-1].innerText='- змінити цей електори id, class,  tag';
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
idElem.style.height='200px';
idElem.style.width='100px';
classElem[0].style.height='110px';
classElem[0].style.width='150px';
tagElem[tagElem.length-1].style.height='50px';
tagElem[tagElem.length-1].style.width='500px';
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let tableElem = document.createElement('table');
let trElem=document.createElement('tr');
let tdElem1= document.createElement('td');
let tdElem2= document.createElement('td');
let tdElem3= document.createElement('td');
tdElem1.innerHTML='html';
tdElem2.innerHTML='css';
tdElem3.innerHTML='js';
trElem.appendChild(tdElem1);
trElem.appendChild(tdElem2);
trElem.appendChild(tdElem3);
tableElem.appendChild(trElem);
document.body.appendChild(tableElem);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
let tableBlok = document.createElement('table');
for (let i = 0; i < 10; i++) {
    let trBlock=document.createElement('tr');
    let tdBlock1= document.createElement('td');
    let tdBlock2= document.createElement('td');
    let tdBlock3= document.createElement('td');
    tdBlock1.innerHTML='html';
    tdBlock2.innerHTML='css';
    tdBlock3.innerHTML='js';
    trBlock.appendChild(tdBlock1);
    trBlock.appendChild(tdBlock2);
    trBlock.appendChild(tdBlock3);
    tableElem.appendChild(trBlock);
}
document.body.appendChild(tableBlok);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let blockTable = document.createElement('table');
for (let i = 0; i < 10; i++) {
    let blockTR=document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let blockTD= document.createElement('td');
        blockTD.innerHTML=i+j;
        blockTR.appendChild(blockTD);
    }
    blockTable.appendChild(blockTR);
}
document.body.appendChild(blockTable);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let elemTable = document.createElement('table');
let n=+prompt('Введіть кількість рядків в таблиці');
let m=+prompt('Введіть кількість комірок в рядку таблиці');
for (let i = 0; i < n; i++) {
    let elemTR=document.createElement('tr');
    for (let j = 0; j < m; j++) {
        let elemTD= document.createElement('td'); 
        elemTD.innerHTML=i+j;
        elemTR.appendChild(elemTD);
    }
    elemTable.appendChild(elemTR);
}
document.body.appendChild(elemTable);
