// Работа с классами
// 1

let elem = document.createElement(`elem`);
// elem.classList.add('www')

// 2

// elem.classList.remove('www');

// 3

// if (elem.classList.contains('www')) {
// console.log('Класс www присутствует');
// } else {
// console.log('Класс www отсутствует');
// }

// 4

// if (elem.classList.contains('www')) {
// elem.classList.remove('www');
// } else {
// elem.classList.add('www');
// }

// 5

// console.log('Количество классов у элемента:', elem.classList.length);

// 6

// elem.classList.forEach(className => {
// alert(className);
// });


// Работа с CSS

// 1

// let elem = document.createElement('elem');
// elem.style.cssText = 'color: red; font-size: 30px; border: 1px colid black;'

// Свойство tagName

// 1

// elem.addEventListener("click", function() {
//     alert(elem.tagName);
// });

// 2

// elem.addEventListener("click", function() {
//     alert(elem.tagName.toLowerCase);
// });

// 3

// let elems = document.querySelector('.www');
// elems.forEach(function(element) {
//     let tagName = element.tagName.toLowerCase();
//     element.textContent += " (" + tagName + ")";
// });

// Вставка элементов через appendChild

// 1

// let ol = document.createElement("ol");
// let li = document.createElement("li");
// li.textContent = "пункт";
// ol.appendChild(li);

// 2

// let ul = document.createElement('list');
// let arr = ['Misha', 'Vasya', 'Ignat', 'Vadim'];
// arr.forEach(function(item) {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
//     console.log(ul)
// });

// Вставка элементов через insertAdjacentHTML

// 1

// let elem = document.createElement('elem');
// elem.insertAdjacentHTML("beforebegin", "<span>!!!</span>");

// 2

// elem.insertAdjacentHTML("afterEnd", "<span>!!!</span>");

// 3

// elem.insertAdjacentHTML("afterBegin", "<span>!!!</span>");

// 4

// elem.insertAdjacentHTML("beforeend", "<span>!!!</span>");

// Удаление и клонирование

// 1

// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let button = document.querySelector("#deleteButton");
// button.addEventListener("click", function() {
//     parent.removeChild(child);
// });

// 2

// let ol = document.querySelector("ol");

// button.addEventListener("click", function() {
//     let lastChild = ol.lastElementChild;
//     if (lastChild) {
//         ol.removeChild(lastChild);
//     }
// });

// 3

// elem.addEventListener("click", function() {
//     elem.parentNode.removeChild(elem);
// });

// 4

// ol.addEventListener("click", function(event) {
//     let target = event.target;
//     if (target.tagName === "li") {
//         ol.removeChild(target);
//     }
// });

// 5 

// let input = document.querySelector("input");
// let btn = document.querySelector("#Button");

// button.addEventListener("click", function() {
//     let result = input.cloneNode(true);
//     input.parentNode.appendChild(result);
// });

// Потомки

// 1

// let child_first = elem.firstElementChild;
// if (child_first) {
//     child_first.style.color = "red";
// }

// 2

// let child_last = elem.lastElementChild;
// if (child_first) {
//     child_first.style.color = "red";
// }

// 3

// let child_all = elem.children;
// for (let i = 0; i < child_all.length; i++) {
//     child_all[i].textContent += '!';
// }

// Соседи

// 1

// let up = elem.previousElementSibling;
// if (up) {
//     up.textContent += '!';
// }

// 2

// let down = elem.nextElementSibling;
// if (down) {
//     down.textContent += '!';
// }

// 3

// let neighbor = elem.nextElementSibling;
// if (neighbor) {
//     let neighbor2 = neighbor.nextElementSibling;
//     if (neighbor2) {
//         neighbor2.textContent += '!';
//     }
// }

// Родители

// 1

// let parent = elem.parentElement;
// if (parent) {
//     parent.style.color = "red";
// }

// 2

// let parents_parent = elem.parentElement.parentElement;
// if (parents_parent) {
//     parents_parent.style.color = "red";
// }

// На величину границы

// 1

// let button = document.querySelector("#button");

// button.addEventListener("click", function() {
//     let top_br = elem.clientTop;
//     alert(top_br);
// });

// 2

// button.addEventListener("click", function() {
//     let left_br = elem.clientLeft;
//     alert(left_br);
// });

// // На полный размер элемента

// 1

// button.addEventListener("click", function() {
//     let width = elem.offsetWidth;
//     alert(width);
// });

// 2

// button.addEventListener("click", function() {
//     let height = elem.offsetHeight;
//     alert(height);
// });


// На размер элемента без границ, но с padding

// 1

// button.addEventListener("click", function() {
//     let width = elem.clientWidth;
//     alert(width);
// });

// 2

// button.addEventListener("click", function() {
//     let height = elem.clientHeight;
//     alert(height);
// });

// // Работа с getComputedStyle

// // 1

// let computed_style = getComputedStyle(elem);
// let width = parseInt(computed_style.width);
// let height = parseInt(computed_style.height);
// alert(`Ширина: ${width} | Высота:${height}`);

// Прокрутка элемента

// 1

// button.addEventListener("click", function() {
//     let top_scroll = elem.scrollTop;
//     alert(top_scroll);
// });

// 2

// button.addEventListener("click", function() {
//     let scroll_left = elem.scrollLeft;
//     alert(scroll_left);
// });

// 3

// button.addEventListener("click", function() {
//     elem.scrollTop = 100;
// });

// 4

// button.addEventListener("click", function() {
//     elem.scrollTop += 100;
// });

// Прокрутка элемента

// 1

// button.addEventListener("click", function() {
//     let scroll_height = elem.scrollHeight;
//     alert(scroll_height);
// });

// 2

// button.addEventListener("click", function() {
//     let scroll_width = elem.scrollWidth;
//     alert(scroll_width);
// });

// 3

// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollHeight - 100;
// });

// Прокрутка страницы

// 1

// let y_btn = document.querySelector("#Ybtn");
// let x_btn = document.querySelector("#Xbtn");
// y_btn.addEventListener("click", function() {
//     let scroll_top = window.pageYOffset || document.documentElement.scrollTop;
//     alert(scroll_top);
// });

// 2
// x_btn.addEventListener("click", function() {
//     let scroll_left = window.pageXOffset || document.documentElement.scrollLeft;
//     alert(scroll_left);
// });

// Прокрутка страницы

// 1

// let btn_scroll = document.querySelector("#buttonScroll");
// btn_scroll.addEventListener("click", function() {
//     window.scrollTo(300, 500);
// });

// 2

// let scroll_y = document.querySelector("#scrollDownBtn");
// scroll_y.addEventListener("click", function() {
//     window.scrollBy(0, 300);
// });

// Практика

// 1

// let btn_lower = document.querySelector("#BtnLower");
// btn_lower.addEventListener("click", function() {
//     window.scrollTo(0, document.documentElement.scrollHeight);
// });

// 2

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function() {
//     window.scrollBy(0, 400);
// });

// 3

// let check_btn = document.querySelector("#checkBtn");
// check_btn.addEventListener("click", function() {
//     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
//         window.scrollTo(0, 100);
//     }
// });

//  4

// elem.addEventListener("click", function() {
//     elem.style.width = (parseFloat(getComputedStyle(elem).width) * 2);
//     elem.style.height = (parseFloat(getComputedStyle(elem).height) * 2);
// });