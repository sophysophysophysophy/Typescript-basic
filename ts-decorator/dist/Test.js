"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(canBeEdit) {
    return function (target, propName, description) {
        console.log(canBeEdit);
        console.log(target);
        console.log(propName);
        console.log(description);
        description.writable = canBeEdit;
    };
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('new Person()');
    }
    Person.prototype.hello = function () {
        console.log('hello');
    };
    __decorate([
        editable(true)
    ], Person.prototype, "hello", null);
    return Person;
}());
var person = new Person();
person.hello();
person.hello = function () {
    console.log('world');
};
person.hello();
