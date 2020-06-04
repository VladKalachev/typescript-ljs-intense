import { IList } from './data';
import './style.css';
export function generateMenu(list: IList[]): string {
    let output: string = '<ul>';
    for (const item of list) {
        const items: IList[] | undefined = item.items;
        output += `<li><a class=${items ? 'title' : ''}>${item.title}</a>`;
        if (items) {
            output += generateMenu(items);
        }
        output += '</li>';
    }
    output += '</ul>';
    return output;
}