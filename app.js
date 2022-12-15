var calc = /** @class */ (function () {
    function calc() {
    }
    calc.prototype.display = function () {
        //const input = document.getElementById('message') as HTMLInputElement;
        var num111 = prompt("enter number1");
        var num222 = prompt("enter number2");
        var num11 = Number(num111);
        var num22 = Number(num222);
        //const value = input?.value;
        //console.log(value)
        console.warn("num1 is ", this.num1);
        console.warn("num2 is ", this.num2);
        var kkk = num11 + num22;
        var kk = kkk.toString();
        var hj = document.getElementById("add").innerHTML = "Addition " + kk;
        console.warn("addition ", kk);
        if (num11 < num22) {
            var c_1 = num22 - num11;
            var cc_1 = c_1.toString();
            var hj_1 = document.getElementById("sub").innerHTML = "substraction " + cc_1;
            console.warn("sub", c_1);
        }
        else {
            var c_2 = num11 - num22;
            console.warn("sub", c_2);
            var cc_2 = c_2.toString();
            var hj_2 = document.getElementById("sub").innerHTML = "substraction " + cc_2;
        }
        console.warn("multiplication", num11 * num22);
        var c = num11 * num22;
        var cc = c.toString();
        document.getElementById("multi").innerHTML = "Multiplication " + cc;
        if (num11 < num22) {
            var c_3 = num22 / num11;
            console.warn("divide", c_3);
            var cc_3 = c_3.toString();
            var hj_3 = document.getElementById("division").innerHTML = "Division " + cc_3;
        }
        else {
            var c_4 = num11 / num22;
            console.warn("divide", c_4);
            var cc_4 = c_4.toString();
            var hj_4 = document.getElementById("division").innerHTML = "division " + cc_4;
        }
    };
    return calc;
}());
var result1 = new calc(); //object creation
//object creation
result1.display();
