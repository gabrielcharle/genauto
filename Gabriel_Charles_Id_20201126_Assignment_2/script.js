const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
	let messages = []
	if (fname.value == '' || fname.value == null) {
		messages.push('Invalid Name')
	}

	if (messages.lenght > 0) {
		e.preventDefault()
		errorElement.innertext = message.joint(', ')
	}
})