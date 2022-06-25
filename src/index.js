import './index.css';
import loadPage from './page-load';
import loadMenu from './menu';
import loadContact from './contact';

loadPage();

const clearPage = () => {
	if (document.querySelector('div.hero')) {
		document
			.querySelector('div.hero')
			.parentNode.removeChild(document.querySelector('div.hero'));
	}
	if (document.querySelector('div.menu')) {
		document
			.querySelector('div.menu')
			.parentNode.removeChild(document.querySelector('div.menu'));
	}
	if (document.querySelector('div.contact')) {
		document
			.querySelector('div.contact')
			.parentNode.removeChild(document.querySelector('div.contact'));
	}
};

let menuButtons = document.querySelectorAll('nav ul a');
menuButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		clearPage();

		if (e.target.textContent === 'Menu') {
			loadMenu();
		} else if (e.target.textContent === 'Contact') {
			loadContact();
		} else {
			loadPage();
		}
	});
});
