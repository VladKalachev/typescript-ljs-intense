import { generateMenu } from './menu';
import { list } from './menu/data';

// declare function vk(selector: string): any;

$('.menu')
    .html(generateMenu(list))
    .on('click', (e: Event) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (!el.classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    });


// const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// navMenu.innerHTML = generateMenu(list);
// navMenu.addEventListener('click', (e) => {
//     const el: HTMLElement = e.target as HTMLElement;
//     if (!el.classList.contains('title')) {
//         return;
//     }
//     const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
//     parentLi.classList.toggle('menu-open');
// });


// import * as React from 'react';
//
// export interface Props {
//     name: string,
//     onSearch: (text: string) => void
// }
//
// class Dropdown extends React.Component<Props> {
//     constructor() {
//         this.props.
//     }
// }