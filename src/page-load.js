
let content = document.getElementById('content');
let main = document.createElement('main');


const pageLoad = () => {
    let content = document.getElementById('content');
    let nav = document.createElement('nav');
    let homeTab = document.createElement('button');
    let menuTab = document.createElement('button');
    let contactTab = document.createElement('button');
    homeTab.className = "tab";
    menuTab.className = "tab";
    contactTab.className = "tab";
    homeTab.id = "homeTab";
    menuTab.id = "menuTab";
    contactTab.id = "contactTab";
    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    contactTab.textContent = 'Contact'
    // head.textContent = "Mary's Bakery";
    // img.src = "../tresleches.jpg";
    // fluff.textContent = 'Authentic Mexican food and pastries made fresh';

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    content.appendChild(nav);
    
}

const home = () => {
    removeAddClass(homeTab, menuTab, contactTab)
    let hometab = document.getElementById('homeTab');
    hometab.classList.add('activeTab')
    let hero = document.createElement('div');
    let head = document.createElement('h1');
    hero.classList.add('hero');
    let fluff = document.createElement('p');

    head.textContent = "Mary's Bakery";

    fluff.textContent = 'Authentic Mexican food and pastries made fresh';
    hero.appendChild(head)
    main.appendChild(hero)
    
    main.appendChild(fluff)

    content.appendChild(main);
}

const removeAddClass = (add, remove1, remove2) => {
    add.classList.add('activeTab');
    remove1.classList.remove('activeTab');
    remove2.classList.remove('activeTab');
}
export {pageLoad, home}
export default removeAddClass