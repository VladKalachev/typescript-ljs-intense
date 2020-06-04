// type, interface, function , classes
type Info = { salary: number }

interface IAccount<UserInfo extends Info & { male: boolean }, UserId = string> {
    id: UserId;
    name: string,
    info: UserInfo
}

let user: IAccount<{ male: boolean, salary: number }> = {
    id: 'qweqwe12312qwqwrqw123',
    name: 'Andrew',
    info: {
        male: true, salary: 3000
    }
}

let admin: IAccount<{ salary: number, male: boolean, subjects: string[] }, number> = {
    id: 23212,
    name: 'Andrew',
    info: {
        salary: 3000,
        subjects: ['TS', 'JS'],
        male: true,
    }
}


let arr: Array<number>