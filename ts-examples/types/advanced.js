/**
 * mix type
 */
function extend(x, y) {
    var assigned = {};
    for (var key in x) {
        assigned[key] = x[key];
    }
    for (var key in y) {
        if (!Object.prototype.hasOwnProperty.call(assigned, key)) {
            assigned[key] = y[key];
        }
    }
    return assigned;
}
var Man = /** @class */ (function () {
    function Man(name) {
        this.name = name;
    }
    return Man;
}());
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function () {
        console.log('logger!!');
    };
    return Logger;
}());
var jim = extend(new Man('Jimmy'), new Logger());
console.log(jim.name);
console.log(jim.log);
/**
 * union type
 */
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("\"padding\" expected string or number, got " + typeof padding);
}
console.log(padLeft('Hello World', 4));
function getSmallPet() {
    return {};
}
var pet = getSmallPet();
pet.layEggs();
// pet.fly() // error, property "fly" does not exist on type "Fish"
// type protection
function isBird(pet) {
    return pet.fly !== undefined;
}
if (isBird(pet)) {
    pet.fly();
}
else {
    pet.swim();
}
/**
 * null checks
 */
var C2 = /** @class */ (function () {
    function C2() {
    }
    return C2;
}());
var c2 = new C2();
c2.a = 12;
c2.a = undefined; // error when --strictNullChecks enabled: type 'undefined' is not assignable to type 'number'
c2.b = 'str';
c2.b = undefined;
c2.b = null; // error when --strictNullChecks enabled: type 'null' is not assignable to type 'string | undefined'
// filter out null
function broken(name) {
    function postfix(epithet) {
        // return name.charAt(0) + '. the' + epithet  // error when --strictNullChecks enabled: Object "name" is possibly 'null'
        return name.charAt(0) + '. the' + epithet; // use "!" after "name" to filter out null
    }
    name = name || 'Bill';
    return postfix(name);
}
broken(null);
