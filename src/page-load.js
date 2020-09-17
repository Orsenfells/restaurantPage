
let content = document.getElementById('content');
let main = document.createElement('main');
const pageLoad = () => {
    let content = document.getElementById('content');
    let nav = document.createElement('nav');
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');
    home.className = "tab";
    menu.className = "tab";
    contact.className = "tab";
    home.id = "home";
    menu.id = "menu";
    contact.id = "contact";
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact'
    // head.textContent = "Mary's Bakery";
    // img.src = "../tresleches.jpg";
    // fluff.textContent = 'Authentic Mexican food and pastries made fresh';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    content.appendChild(nav);
    
}

const home = () => {

    let head = document.createElement('h1')
    let img = document.createElement('img');
    let fluff = document.createElement('p');

    head.textContent = "Mary's Bakery";
    img.src = "../tresleches.jpg";
    fluff.textContent = 'Authentic Mexican food and pastries made fresh';

    main.appendChild(head)
    main.appendChild(img)
    main.appendChild(fluff)

    content.appendChild(main);
}
export {pageLoad, home}