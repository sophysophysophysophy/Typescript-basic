function writable(canBeWrite: boolean) {
    return function(target: any, propName: string): any {
        console.log(canBeWrite);
        console.log(target);
        console.log(propName);
        return {
            writable: canBeWrite
        }
    }
}

class Person {
    @writable(false)
    name: string = 'Mark';

    constructor() {
        console.log('new Person()');
    }
}

const person = new Person();
console.log(person.name);

/*

undefined

*/