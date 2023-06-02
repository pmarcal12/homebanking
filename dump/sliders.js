const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', function handleClick(event)
{
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', function handleClick(event) {
	container.classList.remove("right-panel-active");
});



// <!-- <button (click) = "add(right-panel-active)">Sign In</button> -->