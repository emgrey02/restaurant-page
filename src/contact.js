import './contact.css';

const loadContact = () => {
	const mainDiv = document.querySelector('div#content');
	/* create contact div */
	const contactDiv = document.createElement('div');
	contactDiv.classList.add('contact');

	/* one container div */
	const container = document.createElement('div');

	/* put stuff in container */
	const title = document.createElement('h1');
	title.textContent = 'Contact Us';
	const number = document.createElement('p');
	number.textContent = '(723)-832-1098';
	const email = document.createElement('p');
	email.textContent = 'bitobreakfast@gmail.com';

	container.appendChild(title);
	container.appendChild(number);
	container.appendChild(email);
	contactDiv.appendChild(container);
	mainDiv.appendChild(contactDiv);
};

export default loadContact;
