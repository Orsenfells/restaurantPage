const pageLoad = () => {
    let content = document.getElementById('content');

    let nav = document.createElement('nav');
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');
    home.className = "tab";
    menu.className = "tab";
    contact.className = "tab";
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

export default pageLoad