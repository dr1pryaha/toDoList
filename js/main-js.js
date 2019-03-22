window.onload = function(){
	let inputField = document.querySelector('.entry-field');
	let sectionList = document.querySelector('.to-do-list');
	let allBtn = document.querySelector('.all-btn');
	let notDoneBtn = document.querySelector('.not-done-btn');
	let doneBtn = document.querySelector('.done-btn');

/*Проверка на наличие текста в поле ввода*/
	function isInputEmpty () {
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

		let checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.className = 'to-do-check';
		div.appendChild(checkBox);


/*Функция удаления по нажатию на клавишу мыши*/
		let clickHandler = icon.addEventListener('click', function (){
			sectionList.removeChild(div);
		});

/*Функция выделения заметки*/
		let checkHandler = checkBox.addEventListener('change', function (){
			if (checkBox.checked) {
				div.className = 'to-do-checked';
				icon.className = 'fa-checked fa fa-window-close';
				checkBox.className = 'to-do-check-checked';
			} else {
				div.className = 'to-do-item';
				icon.className = 'fa fa-window-close';
				checkBox.className = 'to-do-check';
			}
		});
	};

/*Функция проверки одинаковых дел*/
	let areThereSameTodos = function(){
		let toDoItem_list = document.querySelectorAll('.to-do-item');
		let toDoItem_array = Array.from(toDoItem_list);
		let toDoItem_result = toDoItem_array.some(curVal => curVal.textContent === inputField.value);
		return toDoItem_result;
	};

/*Функция проверки нажатия клавиши Enter*/
	let isEnterPressed = function(evt){
		if (evt.keyCode === 13) {
			return true;
		} else {
			return false;
		}
	}

/*Функция обработки нажатия клавиши Enter*/
	inputField.addEventListener('keydown', function (evt) {
		if (isEnterPressed(evt) && !isInputEmpty()) {
			alert("Введите текст предстоящего дела");
		} else if(isEnterPressed(evt) && areThereSameTodos()) {
			alert("Такое дело уже запланированно");
		} else if (isEnterPressed(evt)) {
			createToDoItem();
			inputField.value = '';
		}
	});

/*Функция фильтрации 'Все'*/
	allBtn.addEventListener('click', function(){
		allBtn.classList.toggle('all-btn-clicked');
		sectionList;
	})

/*Функция фильтрации 'Несделанные'*/
	notDoneBtn.addEventListener('click', function(){
		notDoneBtn.classList.toggle('not-done-btn-clicked');
		let toDoItem_list = document.querySelectorAll('.to-do-item');
		let toDoItem_checked = document.querySelectorAll('.to-do-checked');
		let toDoItem_array = Array.from(toDoItem_checked);

			toDoItem_list.removeChild(toDoItem_array);

		console.log(sectionList);
	})

/*Функция фильтрации 'Сделанные'*/
	doneBtn.addEventListener('click', function(){
		doneBtn.classList.toggle('done-btn-clicked');
	})
	/*let markComplete = sectionList.addEventListener('click', function (evt) {
		let divComplete = document.querySelector('.to-do-list');
		let iconSpin = document.querySelector('.fa-li fa fa-spinner fa-spin');
		let iconComplete = document.createElement('i');
		iconComplete.className = 'fa-li fa fa-check-square';
		divComplete.replaceChild(iconComplete, iconSpin);
	});*/
}
