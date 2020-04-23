function editable(canBeEdit: boolean) {

    return function(target: any, propName: string, description: PropertyDescriptor) {
        console.log(canBeEdit);
        console.log(target);
        console.log(propName);
        console.log(description);
        description.writable = canBeEdit;
    }
}

class Person {
    constructor() {
        console.log('new Person()');
    }

    @editable(true)
    hello() {
        console.log('hello');
    }
}

const person = new Person();
// person.hello();
// person.hello = function() {
//     console.log('world');
// }
// person.hello();