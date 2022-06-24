const loadMenu = () => {
	let mainDiv = document.querySelector('div#content');
	let menu = document.createElement('div');
	menu.classList.add('menu');
	menu.textContent = 'hello';
	mainDiv.appendChild(menu);
};

export default loadMenu;
