window.onload = function(){
	let inputField = document.querySelector('.entry-field');
	let sectionList = document.querySelector('.to-do-list');

/*Проверка на наличие текста в поле ввода*/
	function checkText () {
		if (inputField.value.length !== 0){
			return true;
		}else{
			return false;
		}
	};

/*Функция создания списка*/
	let createToDoItem = function(){
		let div = document.createElement('div');
		div.className = 'to-do-item';
		div.innerHTML = inputField.value;
		sectionList.appendChild(div);
		let icon = document.createElement('i');
		icon.className = 'fa fa-window-close';
		div.appendChild(icon);

/*Функция обработки нажатия кнопки мыши*/
		let clickHandler = icon.addEventListener('click', function (){
			sectionList.removeChild(div);
		});
	};
/*Функция проверки одинаковых дел*/
		let checkSameCases = function(){
			let toDoItem_list = document.querySelectorAll('.to-do-item');
			let toDoItem_array = Array.from(toDoItem_list);
			let toDoItem_result = toDoItem_array.some(curVal => curVal.textContent === inputField.value);
			return toDoItem_result;
		};
		console.log(checkSameCases());
	

/*Функция обработки нажатия клавиши*/
	let keydownHandler = inputField.addEventListener('keydown', function (evt) {
		if(evt.keyCode === 13 && checkText() === true && checkSameCases() !== true) {
			createToDoItem();
			inputField.value = '';
		} else if (evt.keyCode === 13 && checkText() === true) {
			alert("Такое дело уже запланированно");
		} else if (evt.keyCode === 13 && checkText() === false) {
			alert("Введите текст предстоящего дела");
		} 
		return sectionList;
	});


	/*let markComplete = sectionList.addEventListener('click', function (evt) {
		let divComplete = document.querySelector('.to-do-list');
		let iconSpin = document.querySelector('.fa-li fa fa-spinner fa-spin');
		let iconComplete = document.createElement('i');
		iconComplete.className = 'fa-li fa fa-check-square';
		divComplete.replaceChild(iconComplete, iconSpin);
	});*/
}
