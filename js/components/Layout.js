export class Layout {
    constructor() {}

    header() {
        const HTML = '<header>HEADER</header>';
        const DOM = document.getElementById('app');

        DOM.insertAdjacentHTML('beforeend', HTML);
    }

    main() {
        const HTML = '<main>MAIN</main>';
        const DOM = document.getElementById('app');

        DOM.insertAdjacentHTML('beforeend', HTML);
    }

    footer() {
        const HTML = '<footer>FOOTER</footer>';
        const DOM = document.getElementById('app');

        DOM.insertAdjacentHTML('beforeend', HTML);
    }

    render() {
        
    }
}