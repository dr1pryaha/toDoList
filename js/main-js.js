let inputField = document.querySelector('.entry-field');
let sectionList = document.querySelector('.list-event');

let makeElement = function(tagName, className, text){
	if (inputField === text){
		let enterHandler = document.addEventListener('keydown', function(evt){
			if(evt.keyCode === 13){
				let div = document.createElement('div');
				div.className = "to-do-list";
				div.innerHTML === inputField;
				sectionList.appendChild(div);
			}
		});
		inputField === undefined;
	}
	return sectionList;
}
