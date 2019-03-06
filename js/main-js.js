window.onload = function(){
	let inputField = document.querySelector('input[name = entry-field]');
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
			icon.className ='fa-li fa fa-spinner fa-spin';
			div.className = 'to-do-list';
			div.innerHTML = inputField.value;
			sectionList.appendChild(div);
			div.appendChild(icon);
			inputField.value = '';
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
