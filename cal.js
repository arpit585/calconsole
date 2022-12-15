"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    console.warn("#####   you can do addition,substraction,multiplication,divison operation    #####");
    var firststr = (0, readline_sync_1.question)("Enter first number ");
    var secondstr = (0, readline_sync_1.question)("Enter second number ");
    var operat = (0, readline_sync_1.question)("Enter your operator ");
    var firststrNum = Number(firststr);
    var secondstrNum = Number(secondstr);
    if (operat === "+") {
        var add = firststrNum + secondstrNum;
        console.warn(add);
    }
    if (operat === "-") {
        if (firststrNum < secondstrNum) {
            var sub = secondstrNum - firststrNum;
            console.warn(sub);
        }
        else {
            var sub = firststrNum - secondstrNum;
            console.warn(sub);
        }
    }
    if (operat === "*") {
        var mul = firststrNum * secondstrNum;
        console.warn(mul);
    }
    if (operat === "/") {
        if (firststrNum < secondstrNum) {
            var div = secondstrNum / firststrNum;
            console.warn(div);
        }
        else {
            var div = firststrNum / secondstrNum;
            console.warn(div);
        }
    }
}
main();
