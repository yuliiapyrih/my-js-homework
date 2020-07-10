// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let contentText=document.getElementById("content");
console.log(contentText.innerText);
// - отримує текст з блоку з id "rules"
let rulesText=document.getElementById("rules");
console.log(rulesText.innerText);
// - замініть текст параграфа з id 'content' на будь-який інший
let content=document.getElementById("content");
content.innerText='- замініть текст параграфа з id content на будь-який інший';
// - замініть текст параграфа з id 'rules' на будь-який інший
let rules =document.getElementById("rules");
rules.innerText='- замініть текст параграфа з id rules на будь-який інший';
// - змініть кожному елементу колір фону на червоний
let fon = document.getElementsByTagName('*');
fon[0].style.backgroundColor='red';
// - змініть кожному елементу колір тексту на синій
fon[0].style.color='blue';
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let allRules=document.querySelectorAll("#rules");
console.log(allRules);

// - отримати всі елементи з класом fc_rules
let allFcRules=document.querySelectorAll('.fc_rules');
console.log(allFcRules);
// - поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules= document.getElementsByClassName('fc_rules');
for (let i = 0; i < fcRules.length; i++) {
    fcRules[i].style.color='red';
}