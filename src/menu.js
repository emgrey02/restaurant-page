import './menu.css';
import Pancakes from './pancakes.png';
import FrenchToast from './french-toast.png';
import EggsBenedict from './eggs-benedict.png';
import Omelette from './omelette.png';

const loadMenu = () => {
	/* select parent div */
	let mainDiv = document.querySelector('div#content');

	/* create container div for menu element */
	let menu = document.createElement('div');
	menu.classList.add('menu');

	/* create object of menu items */
	let menuItems = [
		{
			name: 'Eggs Benedict',
			description:
				'Two poached eggs on top of english muffins with ham and an optional slice of avocado, topped with a creamy hollandaise sauce.',
			img: EggsBenedict,
		},
		{
			name: 'Nutella Pancakes',
			description:
				'Three thick and fluffy pancakes topped with nutella and powdered sugar.',
			img: Pancakes,
		},
		{
			name: 'Loaded Omelette',
			description:
				"Choose anything you want to be inside your omelette. We will make it for you, and it'll be good.",
			img: Omelette,
		},
		{
			name: 'Strawberry French Toast',
			description:
				'A scrumpteous two slices of french toast topped with strawberries and whipped cream',
			img: FrenchToast,
		},
	];

	/* create a list to hold contents of menu */
	let menuList = document.createElement('ul');
	menuList.classList.add('menu-list');
	menu.appendChild(menuList);

	menuItems.forEach((item) => {
		let menuItem = document.createElement('li');
		let textContainer = document.createElement('div');
		textContainer.classList.add('text-container');
		let itemName = document.createElement('p');
		let itemDescription = document.createElement('p');
		let foodImage = new Image();
		foodImage.src = item.img;
		itemName.textContent = item.name;
		itemDescription.textContent = item.description;
		textContainer.appendChild(itemName);
		textContainer.appendChild(itemDescription);
		menuItem.appendChild(foodImage);
		menuItem.appendChild(textContainer);
		menuList.appendChild(menuItem);
	});

	mainDiv.appendChild(menu);
};

export default loadMenu;
