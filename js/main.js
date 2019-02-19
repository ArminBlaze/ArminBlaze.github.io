var filters = document.querySelector('.filters');

var activeButton = filters.querySelector('.filters__button_selected');
var activeFilter = activeButton.dataset.id;
var activeList;

selectWorks();
console.log(activeFilter);

filters.addEventListener("click", onFiltersClick);


function onFiltersClick (e) {
	e.preventDefault();
	var target = e.target;
	
	if(target === activeButton || !target.classList.contains('filters__button')) return;
	
	selectButton(target);
	selectWorks();
}

function selectButton(elem) {
	if(activeButton) {
		deselectButton();
	}
	activeButton = elem;
	elem.classList.add('filters__button_selected');
	
	
}

function deselectButton() {
	activeButton.classList.remove('filters__button_selected');
	activeButton = null;
	
	deselectWorks();
}

function selectWorks() {
	deselectWorks();
	
	activeFilter = activeButton.dataset.id;
	activeList = document.querySelector('.works_' + activeFilter);
	activeList.classList.remove('hidden');
}

function deselectWorks() {
	activeFilter = null;
	if(activeList) {
		activeList.classList.add('hidden');
		activeList = null;
	}
}