function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(1,3));

function feb(n: number): number {
    if(n === 0){
        return 1
    }
    return n * feb(n - 1);
}
console.log(feb(10));

function shipWeight() {
    const el = document.getElementById('app') as HTMLElement;
    return parseInt(el.innerHTML, 16);
}

function sendUpdates(emailAddr: string | string[]) {
    function sendEmail(addr: string){
        if(shipWeight() > 100) {
            console.log('WARNING: Oversaze package');
        }
    }

    if(Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string) => {
            sendEmail(val.trim());
        })
    } else {
        sendEmail(emailAddr.trim());
    }
}
