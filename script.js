/* class HTML Builder*/
class HtmlBuilder {
    nav = [
        { 'link': '#', 'title': 'Главная' },
        { 'link': 'pages/developer/index.html', 'title': 'Я разработчик' },
        { 'link': '#', 'title': 'Я инженер' },
        { 'link': '#', 'title': 'Контакты' },
    ];

    constructor() { }

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

class Router {
    routes = [];
    mode = null;
    root = '/';

    constructor(options) {
        this.mode = window.history.pushState ? 'history' : 'hash';
        if (options.mode) {
            this.mode = options.mode;
        }
        if (options.root) {
            this.root = options.root;
        }
    }

    add = (path, cb) => {
        this.routes.push({
            path,
            cb
        })
        return this;
    }

    remove = path => {
        for (let i = 0; i < this.routes.length; i++) {
            if (this.routes[i].path === path) {
                this.routes.slice(i, 1);
                return this;
            }
        }
        return this;
    }

    flush = () => {
        this.routes = [];
        return this;
    }

    clearSlashes = path => path.toString()
        .replace(/\/$/, '')
        .replace(/^\//, '');

    getFragment = () => {
        let fragment = '';
        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
        } else {
            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    }

    navigate = (path = '') => {
        if (this.mode === 'history') {
            window.history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
        }
        return this;
    }

    listen = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.interval, 50);
    }

    interval = () => {
        if (this.current === this.getFragment()) return;
        this.current = this.getFragment();
        this.routes.some(route => {
            const match = this.current.match(route.path);
            if (match) {
                match.shift();
                route.cb.apply({}, match);
                return match;
            }
            return false;
        })
    }

}

const htmlBuilder = new HtmlBuilder();
htmlBuilder.buildHeader(0);

const router = new Router({
    mode: 'hash',
    root: '/'
});

router
    .add(/about/, () => {
        alert('welcome in about page');
    })
    .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
        alert(`products: ${id} specification: ${specification}`);
    })
    .add('', () => {
        console.log('welcome in catch all controller');
    });
