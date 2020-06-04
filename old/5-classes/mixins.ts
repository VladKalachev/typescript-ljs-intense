type Constructable = new (...args: any[]) => any;

function Timestamp<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['TS', 'JS'];
    }
}

class Subject {
    public constructor(
        public readonly  teacher: string
    ) {
    }
}


class User extends Timestamp(Tagged(Subject)) {

}

const user = new User('Igor Nepipenko');
console.log(user.tags);
console.log(user.teacher);
console.log(user.timestamp);