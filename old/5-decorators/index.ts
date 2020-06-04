import { Debounce, LogEventValue, SentToSentry, SavePersistence } from './utils';

class Search {
    constructor(
        private readonly inputElement: HTMLInputElement
    ) {
        this.inputElement.addEventListener('input', this.onSearch.bind(this))
    }

    @Debounce(300)
    @LogEventValue
    @SentToSentry
    private onSearch(_e: Event): void {
        throw new Error('Custom error')
    }

}

const el: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
new Search(el);

class UserAccount {
    public firstName!: string;

    @SavePersistence
    public lastName!: string;
}

let user = new UserAccount();

console.log(user.lastName);
user.lastName = 'Nepipenko';