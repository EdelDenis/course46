"use strict"

// -----------Навигация по DOM - элементам, data-атрибуты, преимущество for/of--------

// console.log(document.body); //-- в консоли боди элемент 

//console.log(document.documentElement); //- в консоле весь хтмл документ

//console.log(document.body.childNodes); - в консоле узлы которые являются детьми у боди

// console.log(document.body.firstChild); // - берет первый элемент боди
console.log(document.body.firstElementChild); // - берет первый элемент боди
// console.log(document.body.lastChild); // - берет последний элемент боди
console.log(document.body.lastElementChild); // - берет последний элемент боди

// console.log(document.querySelector("#current").parentNode.parentNode) - взять родительский ноду
console.log(document.querySelector("#current").parentElement) //- взять родительский єлемент

// ----------------- DATA-атрибуты -------------------

// console.log(document.querySelector(`[data-current="3"]`).nextSibling.nextSibling); - взять следующий после отмеченного єлемента(нода)
console.log(document.querySelector(`[data-current="3"]`).nextElementSibling); // - взять следующий после отмеченного єлемента

// console.log(document.querySelector(`[data-current="3"]`).previousSibling); - взять предидущий после отмеченного єлемента(нода)
console.log(document.querySelector(`[data-current="3"]`).previousElementSibling); // - взять предидущий после отмеченного єлемента

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }

    console.log(node);
}