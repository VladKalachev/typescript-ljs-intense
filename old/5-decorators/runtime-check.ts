import 'reflect-metadata'

class UserAccount {
    @CheckTypeInRuntime
    public firstName!: string;
    public lastName!: string;
}

const user = new UserAccount();
user.firstName = 'Ihor';

setTimeout(() => {
    (user.firstName as any) = 1222;
}, 5000)

export function CheckTypeInRuntime(target: any, key: string): void {
    const {name: type} = Reflect.getMetadata('design:type', target, key)
    let val: any;
    Object.defineProperty(target, key, {
        get() {
            return val;
        },
        set(newValue: any): void {
            const realType = typeof newValue;
            if (realType !== type.toLowerCase()) {
                throw new Error(`type of ${key} is not ${type}. You tried to set ${realType}`)
            }
            val = newValue;
        }
    })
}