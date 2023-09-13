// Створити масив, довжину та елементи якого задає користувач.
let arrLength = +prompt('Enter array length');
let arrElements = prompt('Enter array elements separated by comma').split(',');
let arr = [];
for (let i = 0; i < arrLength; i++) {
	arr.push(arrElements[i]);
}
let div1 = document.querySelector('.div1');
div1.innerHTML = arr;

// Відсортувати масив за зростанням.
arr.sort((a, b) => a - b);
let div2 = document.querySelector('.div2');
div2.innerHTML = arr;

// Видалити елементи з масиву з 2 по 4 (включно!).
arr.splice(1, 4);
let div3 = document.querySelector('.div3');
div3.innerHTML = arr;

// У міру змін виводити вміст масиву на сторінку.