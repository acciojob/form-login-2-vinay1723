//your JS code here. If required.
let res = "";
const submit = document.querySelector('button[type="submit"]');
let form = document.getElementsByTagName('form')[0];
const inputs = document.getElementsByTagName('input');

form.addEventListener('submit',(e) => {
	e.preventDefault();
	for (let input of inputs) {
		res += (input.getAttribute('name')+ ":" + " "+ input.value + " ");
	}
	alert(res);
})