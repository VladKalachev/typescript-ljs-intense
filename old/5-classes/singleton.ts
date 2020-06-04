class Singleton {

    private static _instance: Singleton;

    private constructor() {
    }

    public static get instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

let inst = Singleton.instance;
let inst1 = Singleton.instance;
let inst2 = Singleton.instance;
let inst3 = Singleton.instance;
let inst4 = Singleton.instance;

console.log(inst === inst1);
console.log(inst === inst4);