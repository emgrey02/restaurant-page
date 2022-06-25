import './menu.css';

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
			img: '',
		},
		{
			name: 'Nutella Pancakes',
			description:
				'Three thick and fluffy pancakes topped with nutella and powdered sugar.',
			img: '',
		},
		{
			name: 'Loaded Omelete',
			description:
				"Choose anything you want to be inside your omelete. We will make it for you, and it'll be good.",
			img: '',
		},
		{
			name: 'Strawberry French Toast',
			description:
				'A scrumpteous two slices of french toast topped with strawberries and whipped cream',
			img: '',
		},
	];

	/* create a list to hold contents of menu */
	let menuList = document.createElement('ul');
	menuList.classList.add('menu-list');
	menu.appendChild(menuList);

	menuItems.forEach((item) => {
		let menuItem = document.createElement('li');
		let itemName = document.createElement('p');
		let itemDescription = document.createElement('p');
		itemName.textContent = item.name;
		itemDescription.textContent = item.description;
		menuItem.appendChild(itemName);
		menuItem.appendChild(itemDescription);
		menuList.appendChild(menuItem);
	});

	mainDiv.appendChild(menu);
};

export default loadMenu;
