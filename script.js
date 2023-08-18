/* class HTML Builder*/
class HtmlBuilder {
    constructor() {
        this.nav = [
            { 'link': '#', 'title': 'Главная' },
            { 'link': 'pages/developer/index.html', 'title': 'Я разработчик' },
            { 'link': '#', 'title': 'Я инженер' },
            { 'link': '#', 'title': 'Контакты' },
        ];
    }

    getNav() {
        return this.nav;
    }

    buildHeader(index) {
        const header = document.querySelector('header');
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');
        const logo = document.createElement('a');
        logo.classList.add('logo');
        logo.href = "#";
        const object = document.createElement('object');
        object.type = "image/svg+xml";
        object.data = "assets/icons/logo.svg";
        object.width = "40";
        object.height = "60";
        object.textContent = 'Your browser does not support SVG';
        logo.append(object);
        const title = document.createElement('h1');
        title.innerHTML = 'Vitali Kulsha';
        logoContainer.append(logo, title);
        const headerNavigation = document.createElement('nav');
        headerNavigation.classList.add('header__navigation');
        const navigation = document.createElement('ul');
        navigation.classList.add('navigation');
        for (let i = 0; i < this.getNav().length; i++) {
            const navLink = document.createElement('li');
            navLink.classList.add('navigation__link');
            if (i === index) {
                navLink.classList.add('navigation__link_active');
            }
            const link = document.createElement('a');
            link.href = this.getNav()[i].link;
            link.innerHTML = this.getNav()[i].title;
            navLink.append(link);
            navigation.append(navLink);
        }
        headerNavigation.append(navigation);
        wrapper.append(logoContainer, headerNavigation);
        header.append(wrapper);
    }
}

const htmlBuilder = new HtmlBuilder();
htmlBuilder.buildHeader(0);
