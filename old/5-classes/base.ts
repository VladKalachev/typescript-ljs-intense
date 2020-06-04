interface IPoint {
    x: number;

    onInit(): void;

    sum(): number;
}

class BasePoint implements IPoint {

    #e: number = 10;

    public constructor(
        public readonly x: number,
        protected readonly y: number,
        private readonly z: number,
    ) {
    }

    public onInit(): void {
        console.log(this.#e, this.z);
    }

    public sum(): number {
        return this.x + this.y;
    }
}

let p = new BasePoint(1, 2, 3);

class Point extends BasePoint {
    constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }

    public onInit(): void {
        // some custom logic;
        super.onInit();
    }
}