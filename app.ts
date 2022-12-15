class calc{
    
    num1:number;
    num2:number;
    result:number;
    
    display():void
    {
        //const input = document.getElementById('message') as HTMLInputElement;
        
        const num111=prompt("enter number1")
        let num222=prompt("enter number2")
        let num11 = Number(num111) 
        let num22 = Number(num222)
        //const value = input?.value;
        //console.log(value)
        console.warn("num1 is ",this.num1);
        console.warn("num2 is ",this.num2)
        let kkk=num11+num22;
        let kk=kkk.toString() 
        let hj = document.getElementById("add").innerHTML="Addition "+kk
        console.warn("addition ",kk)
        if(num11<num22){
            let c:number=num22-num11
            let cc=c.toString() 
            let hj = document.getElementById("sub").innerHTML="substraction "+cc
            console.warn("sub",c)

        }
        else{
            let c:number=num11-num22
            console.warn("sub",c)
            let cc=c.toString() 
            let hj = document.getElementById("sub").innerHTML="substraction "+cc
        }
        console.warn("multiplication",num11*num22)
        let c = num11*num22
        let cc=c.toString() 
        document.getElementById("multi").innerHTML="Multiplication "+cc
        if(num11<num22){
            let c:number=num22/num11
            console.warn("divide",c)
            let cc=c.toString() 
            let hj = document.getElementById("division").innerHTML="Division "+cc

        }
        else{
            let c:number=num11/num22
            console.warn("divide",c)
            let cc=c.toString() 
            let hj = document.getElementById("division").innerHTML="division "+cc
        }
        
    }
}
var result1=new calc();//object creation
//object creation
result1.display()

