import menuItem from './item.hbs';
import items from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

// Шаблон
const menuCont = document.querySelector('.js-menu');
const menuListMarkup = menuItem(items);

menuCont.insertAdjacentHTML('beforeend', menuListMarkup);

//Тема
const themeSwitcher = document.querySelector('.theme-switch__toggle');
const body = document.body;

themeSwitcher.addEventListener('change', onThemeSwitch);

function onThemeSwitch(event){
    if (themeSwitcher.checked) {
		body.classList.add(`${Theme.DARK}`);
        body.classList.remove(`${Theme.LIGHT}`);
        localStorage.setItem('theme', `${Theme.DARK}`);
	}
	else {
        body.classList.remove(`${Theme.DARK}`)
		body.classList.add(`${Theme.LIGHT}`);
        localStorage.setItem('theme', `${Theme.LIGHT}`);
    }
};

function savedTheme(){
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === `${Theme.DARK}`){
        themeSwitcher.checked = true;
        body.classList.add(`${Theme.DARK}`);
    }
    else{
        themeSwitcher.checked = false;
        body.classList.add(`${Theme.LIGHT}`);
    }
};

savedTheme();