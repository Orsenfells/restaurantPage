import removeAddClass from './page-load'

const menu = () => {
    if (menuTab.classList.contains('activeTab')) {
        return;
    }
    removeAddClass(menuTab, homeTab, contactTab);
    let main = document.querySelector('main');
    main.textContent = "";
    let menuItem1 = document.createElement('div');
    let menuItem2 = document.createElement('div');
    let menuItem3 = document.createElement('div');
    let menuItem4 = document.createElement('div');
    let menuContainer = document.createElement('div');
    let cookies = document.createElement('img');
    let concha = document.createElement('img');
    let caldo = document.createElement('img');
    let tresLeches = document.createElement('img');
    let cookieBlurb = document.createElement('p');
    let conchaBlurb = document.createElement('p');
    let caldoBlurb = document.createElement('p')
    let tresLechesBlurb = document.createElement('p');
    cookieBlurb.textContent = "Specialty Stock Cookie";
    conchaBlurb.textContent = "Conchas - Tasty Mexican Sweet Bread!"
    caldoBlurb.textContent = "Caldo de Res Home In a Bowl"
    tresLechesBlurb.textContent = "Tres Leches - Three Milk Cake"
    cookies.src = '../images/cookie.jpeg';
    concha.src = '../images/concha.jpeg';
    caldo.src = '../images/caldo1.jpg';
    tresLeches.src = '../images/tresleches.jpg';
    menuItem1.classList.add('menuItem');
    menuItem2.classList.add('menuItem');
    menuItem3.classList.add('menuItem');
    menuItem4.classList.add('menuItem');
    menuContainer.classList.add('menuContainer');
    menuItem1.appendChild(cookies);
    menuItem1.appendChild(cookieBlurb);
    menuItem2.appendChild(concha);
    menuItem2.appendChild(conchaBlurb)
    menuItem3.appendChild(caldo);
    menuItem3.appendChild(caldoBlurb)
    menuItem4.appendChild(tresLeches)
    menuItem4.appendChild(tresLechesBlurb)
    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);
    menuContainer.appendChild(menuItem3);
    menuContainer.appendChild(menuItem4);
    main.appendChild(menuContainer);
}

export default menu;