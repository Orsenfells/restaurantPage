import removeAddClass from './page-load'

const contact = () => {
    let main = document.querySelector('main');
    main.textContent = "";
    removeAddClass(contactTab, menuTab, homeTab)
}

export default contact;