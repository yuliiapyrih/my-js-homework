// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let mainHeader=document.getElementById('main_header');
mainHeader.style.color='yellow';
// -- робить шириниу елементу ul 400 пікселів
let widthUl=document.getElementsByTagName('ul');
widthUl[0].style.width='400px';
// -- робить шириниу всіх елементів з класом linkList шириною 50%
let linkList=document.getElementsByClassName('linkList');
for (let i = 0; i < linkList.length; i++) {
    linkList[i].style.width='50%';
}
// -- отримує текст який зберігається в елементі з класом listElement2
let listElement2=document.getElementsByClassName('listElement2');
console.log(listElement2[0].innerText);
// -- отримує всі елементи li та змінює ім колір фону на сірий
let lishka=document.getElementsByTagName('li');
for (let i = 0; i < lishka.length; i++) {
    lishka[i].style.backgroundColor='silver';
}
// -- отримує всі елементи 'a' та додає їм клас anchor
let elemA = document.getElementsByTagName('a');
for (let i = 0; i < elemA.length; i++) {
    elemA[i].classList.add('anchor');
}
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let i = 0; i < elemA.length; i++) {
    if(elemA[i].innerText==='link3'){
        elemA[i].style.fontSize='40px';
    }
}
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let i = 0; i < elemA.length; i++) {
    elemA[i].classList.add('element_XXX');
    elemA[i].innerText='XXX';
}
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
let fon=prompt('Input color of front');
for (let i = 0; i < subHeader.length; i++) {
    subHeader[i].style.backgroundColor=fon;
}
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let colorText=prompt('Input color of text');
for (let i = 0; i < subHeader.length; i++) {
    if (subHeader[i].innerText==='content 2 segment') {
        subHeader[i].style.color=colorText;
    }
}
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
let text=prompt('Input text')
content1[0].innerText=text;
// -- отримати елементи p та змінити їм paddin на довільне значення
let elemP= document.getElementsByTagName('p');
for (let i = 0; i < elemP.length; i++) {
    elemP[i].style.padding='50px';
}
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text2=document.getElementsByClassName('text2');
text2[0].innerText='-- отримати елементи з класом text2 та змінити їм текст на довільне значення';