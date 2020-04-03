function addUp(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUp(4));
var unionTypeFunction = function (a) {
    if (typeof a === "string") {
        console.log('you passed in a string ');
    }
    else if (typeof a === "number") {
        console.log("you passed in number");
    }
};
unionTypeFunction(3);
unionTypeFunction('hello world');
var functionRetruningBasicFunction = function () {
    return function (a) {
        console.log("this function was printed !");
        console.log(a);
        return 5;
    };
};
//# sourceMappingURL=main.js.map