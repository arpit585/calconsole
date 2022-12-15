function add(a:number,b:number):number;
function add(a:string,b:string):string;

function add(a:any,b:any):any
{
    return a+b;
}

console.log(add(100,200))
console.log(add("welcome","john"))
console.log(add(12,23))

//function overloading with different number of paramaters and types with same name is not supported+