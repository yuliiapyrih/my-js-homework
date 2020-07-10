// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
let allClass=document.querySelectorAll('[class]');
console.log(allClass);
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
let allP=document.querySelectorAll('p');
for (let i = 0; i < allP.length; i++) {
    allP[i].innerHTML='hello oktenweb!';
}
//  - знайти всі div та змінити ім колір на червоний
let allDiv=document.querySelectorAll('div');
for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].style.background='red';
}