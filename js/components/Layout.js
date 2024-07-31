import { PageContact } from "./PageContact.js";
import { PageHome } from "./PageHome.js";
import { PageServices } from "./PageServices.js";
import { PageShopAddNew } from "./pageShopAddNew.js";
import { PageShopList } from "./pageShopList.js";
import { PageTeam } from "./PageTeam.js";

export class Layout {
    constructor() {
        this.pagesData = [
            {
                text: 'Home',
                content: PageHome,
                background: 'pink',
                title: 'Home',
            },
            {
                text: 'Shop',
                content: PageShopList,
                background: 'white',
                title: 'Your shopping list',
            },
            {
                text: 'Add',
                extraMenuStyle: 'menu-btn',
                content: PageShopAddNew,
                background: 'white',
                title: 'Add new item to your shopping list',
            },   
        ];
        this.DOM = document.getElementById('app');
        this.mainDOM = null;

        this.render();
        this.headerEvents();

        new this.pagesData[2].content(this.mainDOM);
    }

    header() {
         let navHTML = '';

        for (const link of this.pagesData) {
            const style = link.extraMenuStyle ? link.extraMenuStyle : '';
            navHTML += `<button class="link ${style}">${link.text}</button>`;
        }

        return `
            <header class="container main-header">
                <div class="row">
                    <div class="col-12 main-header-content">
                        <img class="logo" src="./img/logo.png" alt="Logo">
                        <nav class="main-nav">
                            ${navHTML}
                        </nav>
                    <div>
                <div>
            </header>`;
    }

    headerEvents() {
        const buttonsDOM = document.querySelectorAll('.main-header-content button');
        this.mainDOM = document.querySelector('main.container');

        for (let i = 0; i < buttonsDOM.length; i++) {
            const buttonDOM = buttonsDOM[i];
            buttonDOM.addEventListener('click', () => {
                const pageClass = this.pagesData[i].content;
                
                new pageClass(this.mainDOM);
            });
        }
    }
    
    main() {
        return `
            <main class="container">
                EMPTY RENDER
            </main>`;
    }

    footer() {
        return '<footer class="container">&copy; Copyright 2024</footer>';
    }

    render() {
        const HTML = this.header() + this.main() + this.footer();  
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}