const form = document.querySelector('.form');
const usernameFeedback = document.querySelector('.feedback');
const emailFeedback = document.querySelector('.feedback1');
const numberFeedback = document.querySelector('.feedback2');
const passwordFeedback = document.querySelector('.feedback3');
const passwordFeedback1 = document.querySelector('.feedback4');
const usernamePattern = /^[a-zA-Z0-9]{6,15}$/;
const emailPattern = /^[a-zA-Z0-9@.]{5,}$/;
const numberPattern = /^[0-9]{11}$/;
const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+}{":?><~}]{7,13}$/;

// submit event
form.addEventListener( 'submit' , e => {
    e.preventDefault();

const username = form.username.value;

if (usernamePattern.test(username)){
	usernameFeedback.textContent = 'The Username is great';
	usernameFeedback.style.color = 'green';
} else{
	usernameFeedback.textContent = 'Username must be at min 6 characters and max 15 characters, no symbols.';
	usernameFeedback.style.color = 'red';	
}

const email = form.email.value;

if(emailPattern.test(email)){
	emailFeedback.textContent = 'The email is perfect';
	emailFeedback.style.color = 'green';
}
else{
	emailFeedback.textContent = 'The email is not valid!';
	emailFeedback.style.color = 'red';
}

const number = form.tel.value;

if(numberPattern.test(number)){
	numberFeedback.textContent = 'The phone number looks nice';
	numberFeedback.style.color = 'green';
}
else{
	numberFeedback.textContent = 'The phone number is invalid!, max of 11 characters.'
	numberFeedback.style.color = 'red';
}

const password = form.password.value;
	if(passwordPattern.test(password)){
		passwordFeedback.textContent = 'Valid password';
		passwordFeedback.style.color = 'green';
	}
	else{
		password.textContent = 'Invalid password, try another!, minimum of 7 and max of 13 charaters.'
		passwordFeedback.style.color = 'red';
	}

const confirmPassword = form.password1.value;
if (password === confirmPassword){
	passwordFeedback1.textContent = 'Valid, password match'
	passwordFeedback1.style.color = 'green';
	form.password1.setAttribute('id', 'success');
	}
else{
	passwordFeedback1.textContent = 'invalid, password unmatch!'
	passwordFeedback1.style.color = 'red';
	form.password1.setAttribute('id', 'error');
	}
});

// live feedback
form.username.addEventListener('keyup', e => {
	if(usernamePattern.test(form.username.value)){
		form.username.setAttribute('id', 'success');
	}
	else {
		form.username.setAttribute('id', 'error');
	}
});

form.email.addEventListener('keyup', e => {
	if(emailPattern.test(form.email.value)){
		form.email.setAttribute('id', 'success');
	}
	else{
		form.email.setAttribute('id', 'error')
	}
});

form.tel.addEventListener('keyup', e => {
	if(numberPattern.test(form.tel.value)){
		form.tel.setAttribute('id', 'success');
	}
	else{
		form.tel.setAttribute('id', 'error');
	}
});

form.password.addEventListener('keyup', e => {
	if(passwordPattern.test(form.password.value)){
		form.password.setAttribute('id', 'success');
	}
	else{
		form.password.setAttribute('id', 'error');
	}
});