"use strict"

// -----------Навигация по DOM - элементам, data-атрибуты, преимущество for/of--------

// console.log(document.body); - // в консоле боди єлемент

// console.log(document.documentElement);  // - в консоле хтмл целиком

// console.log(document.body.childNodes); // - получаем детей боди

// console.log(document.body.firstChild); // - первый ребенок боди 

// console.log(document.body.lastChild); // - последний ребенок боди

//  ----------------------- 

console.log(document.querySelector("#current").parentNode) // - получим элемент с классом фирст
                                                           // - если продублировать команду будет родитель от родителя

                                                           
// DATA-CURRENT----------------- атрибут DATA-

// console.log(document.querySelector(`[data-current="3"]`).nextSibling);// - выведет след текст ноду

// console.log(document.querySelector(`[data-current="3"]`).previousSibling); 



// --------- ЄЛЕМЕНТІ БЕЗ НОД

// console.log(document.querySelector(`[data-current="3"]`).nextElementSibling); // выведед след элемент после отмеченного
// console.log(document.querySelector(`[data-current="3"]`).previousElementSibling); // выведет предидущий элемент

//console.log(document.querySelector("#current").parentElement); // - выведет родителя отмеченного элемента 

// console.log(document.body.firstElementChild); // - выведет первого ребенка БОДИ

// console.log(document.body.lastElementChild); // - последний єлемент боди

// перебрать всех чайд нодсов и убрать текстовіе ноді 

for (let node of document.body.childNodes) {
    if(node.nodeName == "#text"){
        continue;
    }

    console.log(node);
}












