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
		};
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
		checkBox.id = 'chk';
		checkBox.className = 'checkbox';
		div.appendChild(checkBox);

		let iconBox = document.createElement('label');
		iconBox.className = 'fa fa-circle-thin';
		iconBox.for = 'chk';
		div.appendChild(iconBox);


/*Функция удаления по нажатию на клавишу мыши*/
		let clickHandler = icon.addEventListener('click', function (){
			sectionList.removeChild(div);
		});

/*Функция выделения заметки*/
		let checkHandler = checkBox.addEventListener('change', function (){
			if (checkBox.checked) {
				div.className = 'to-do-checked';
				icon.className = 'fa-checked fa fa-window-close';
				iconBox.className = 'fa fa-check-circle';
				checkBox.className = 'checkbox-checked';
			} else {
				div.className = 'to-do-item';
				icon.className = 'fa fa-window-close';
				checkBox.className = 'checkbox';
				iconBox.className = 'fa fa-circle-thin';
			};
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
		};
	};

/*Функция обработки нажатия клавиши Enter*/
	inputField.addEventListener('keydown', function (evt) {
		if (isEnterPressed(evt) && !isInputEmpty()) {
			alert("Введите текст предстоящего дела");
		} else if(isEnterPressed(evt) && areThereSameTodos()) {
			alert("Такое дело уже запланированно");
		} else if (isEnterPressed(evt)) {
			createToDoItem();
			inputField.value = '';
		};
	});

/*Функция сброса параметров фильтра*/
	let resetFilterSettings = function(){
		let toDoItem_all = document.querySelectorAll('.filtered');
		let toDoItem_array_all = Array.from(toDoItem_all);
		let toDoItem_result_all = toDoItem_array_all.forEach(curVal => curVal.classList.remove('filtered'));
		return toDoItem_result_all;	
	};

/*Функция фильтрации по классу*/
	let  filterElementsByClass = function(classEl){
		let toDoItem_list = document.querySelectorAll(classEl);
		let toDoItem_array = Array.from(toDoItem_list);
			toDoItem_array.forEach(curVal => curVal.classList.add('filtered'));
	};

	let btnHandler = function(btn){
		function clickedFunc(e){
			e.currentTarget.classList.add('clicked');
			resetFilterSettings();
				if (btn === notDoneBtn) {
					filterElementsByClass('.to-do-checked');
				} else if (btn === doneBtn){
					filterElementsByClass('.to-do-item');
				};
		};
		let btns = document.getElementsByClassName('button')
			for(var i = 0; i < btns.length; i++){
				btns[i].addEventListener('click', clickedFunc);
			};
	};

	btnHandler(allBtn);
	btnHandler(notDoneBtn);
	btnHandler(doneBtn);
	
/*Функция фильтрации 'Все'*/
	allBtn.addEventListener('click', function(){
		allBtn.classList.toggle('clicked');
		notDoneBtn.className = 'not-done-btn';
		doneBtn.className = 'done-btn';
		resetFilterSettings();	
	});

/*Функция фильтрации 'Несделанные'*/
	notDoneBtn.addEventListener('click', function(){
		notDoneBtn.classList.toggle('clicked');
		allBtn.className = 'all-btn';
		doneBtn.className = 'done-btn';
		resetFilterSettings();
		filterElementsByClass('.to-do-checked');
		/*if (checkHandler()){

		}*/
	});

/*Функция фильтрации 'Сделанные'*/
	doneBtn.addEventListener('click', function(){
		doneBtn.classList.toggle('clicked');
		allBtn.className = 'all-btn';
		notDoneBtn.className = 'not-done-btn';
		resetFilterSettings();	
		filterElementsByClass('.to-do-item');		
	});
}