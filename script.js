'use strict';

const secretNumber = Math.trunc (Math.random() * 20) +
1;

let score = 20;
             
document.querySelector('.check').addEventlistener('click', function ()) {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
  	document.querySelector('.message').textContent = 
    'No number!';

} else if (guess === secretNumber) {
	document.querySelector('.message').textContent
	'Correct Number!';
	
	document.querySelector('.number').textContent =
	secretNumber;
	
	document.querySelector('body').style.
	backgroundColor = '#60b347';
	
	document.querySelector('.number').style.width =
	'30rem';
}

}