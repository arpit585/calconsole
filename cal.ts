import { question } from "readline-sync";

function main():void{
    console.warn("#####   you can do addition,substraction,multiplication,divison operation    #####")
    const firststr: string = question("Enter first number ")
    const secondstr: string = question("Enter second number ")
    const operat: string = question("Enter your operator ")
    let firststrNum:number = Number(firststr)
    let secondstrNum:number = Number(secondstr)
    if(operat==="+"){
        let add:number = firststrNum+secondstrNum
        console.warn(add)
    }
    if(operat==="-"){
        if(firststrNum<secondstrNum){
            let sub:number=secondstrNum-firststrNum
            console.warn(sub)
        }
        else{
            let sub:number=firststrNum-secondstrNum
            console.warn(sub)
        }
    }
    if(operat==="*"){
        let mul:number=firststrNum*secondstrNum
        console.warn(mul)
    }
    if(operat==="/"){
        if(firststrNum<secondstrNum){
            let div:number=secondstrNum/firststrNum
            console.warn(div)
        }
        else{
            let div:number=firststrNum/secondstrNum
            console.warn(div)
        }
    }
    }

main()