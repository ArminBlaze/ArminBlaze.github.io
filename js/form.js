
//		модальное окно
		
var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");
var storageMail = localStorage.getItem("password");
		
		
link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
			
	if (popup.classList.contains("modal-error")) {
		popup.classList.remove("modal-error");
	}
	if (storage && storageMail) {
		login.value = storage;
		password.value = storageMail;
	} else {
		login.focus();
	}
});
		
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});
		
form.addEventListener("submit", function (event) {
			
	if (!(login.value && password.value)) {
		event.preventDefault();
		if (popup.classList.contains("modal-error")) {
			popup.classList.remove("modal-error");
		}
		console.log("Нужно ввести логин и пароль");
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
		localStorage.setItem("password", password.value);
	}
			
});
		
window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});