import Hero from './breakfast.svg';

const initialPageLoad = () => {
	//get main content element
	const contentDiv = document.getElementById('content');

	//create header with nav elements
	if (!document.querySelector('nav')) {
		const header = document.createElement('header');
		const nav = document.createElement('nav');
		const navList = document.createElement('ul');
		const tabs = ['Home', 'Menu', 'Contact'];
		for (let i = 0; i < tabs.length; i++) {
			const navListItem = document.createElement('li');
			const navLink = document.createElement('a');
			navLink.href = `#${tabs[i]}`;
			navLink.textContent = tabs[i];
			navListItem.appendChild(navLink);
			navList.appendChild(navListItem);
		}
		nav.appendChild(navList);
		header.appendChild(nav);
		contentDiv.appendChild(header);
	}

	//create hero
	const hero = document.createElement('div');
	hero.classList.add('hero');
	const heroImage = new Image();
	const title = document.createElement('h1');
	const headline = document.createElement('p');
	headline.classList.add('headline');
	heroImage.src = Hero;
	hero.appendChild(heroImage);
	title.textContent = "Bit o' Breakfast";
	hero.appendChild(title);
	headline.textContent = 'The best bite in town. Start your day off right.';
	hero.appendChild(headline);

	//append to main content element

	contentDiv.appendChild(hero);
};

export default initialPageLoad;
