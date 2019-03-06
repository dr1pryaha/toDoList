window.onload = function(){
	let inputField = document.querySelector('div.head-field input[name = entry-field]');
	let sectionList = document.querySelector('.list-event');

/*Проверка на наличие текста в поле ввода*/
	function checkText (text) {
		if (inputField.value.length !== 0){
			return true;
		}else{
			return false;
		}
	};

/*Функция создания списка и обработки нажатия клавиши*/
	let keydownHandler = inputField.addEventListener('keydown', function (evt) {
		if(evt.keyCode === 13 && checkText() === true){
			let div = document.createElement('div');
			let icon = document.createElement('i');
			icon.className ="fa-li fa fa-spinner fa-spin";
			div.className = "to-do-list";
			div.innerHTML = inputField.value;
			sectionList.appendChild(div);
			div.appendChild(icon);
			inputField.value = '';
		}
		return sectionList;
		//checkText(inputField.value) !!!!!!
	});
}








/*	let makeElement = function(text){
		if (inputField === text){
			let enterHandler =  function(evt){
				if(evt.keyCode === 13){
					let div = document.createElement('div');
					div.className = "to-do-list";
					div.innerHTML === inputField;
					sectionList.appendChild(div);
				}
			};
			inputField.onkeydown = enterHandler;
			inputField === undefined;
		};
	return sectionList;
	};
};*/
