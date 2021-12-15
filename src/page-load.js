import Hero from './breakfast.svg';

const initialPageLoad = () => {
  //get main content element
  const contentDiv = document.getElementById('content');

  //create header with nav elements
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

  //create hero
  const hero = document.createElement('div');
  hero.classList.add('hero');
  const heroImage = new Image();
  const title = document.createElement('h1');
  heroImage.src = Hero;
  hero.appendChild(heroImage);
  title.textContent = "Bit o' Breakfast";
  hero.appendChild(title);

  //append to main content element
  contentDiv.appendChild(header);
  contentDiv.appendChild(hero);
};

export default initialPageLoad;
