import removeAddClass from './page-load'

const menu = () => {
    let main = document.querySelector('main');
    main.textContent = "";
    removeAddClass(menuTab, homeTab, contactTab);
}

export default menu;