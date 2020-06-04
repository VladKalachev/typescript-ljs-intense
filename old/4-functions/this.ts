// type TAccount = { name: string, surname: string };
//
// function getFullName(this: TAccount) {
//     return `${this.name}${this.surname}`;
// }
//
// let account = {
//     name: 'Andrew',
//     surname: 'Andrew',
//     getFullName
// }
//
// account.getFullName();


// class UIElement {
//     addClick(_cb: (this: void, e: Event) => void) {
//     }
// }
//
//
// class Handler {
//     info!: string;
//
//     click(this: this, _e: Event) {
//
//     }
// }
//
// const h = new Handler();
// const el = new UIElement();
//
// el.addClick(h.click)

function fn<T extends { name: string, age: number }>(this: T, _key: keyof T): void {

}

let account = {
    name: 'Andrew',
    surname: 'Andrew',
    age: 33,
    getFullName: fn
}

account.getFullName('age')