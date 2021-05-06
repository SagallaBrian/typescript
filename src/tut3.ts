// Static types in function, objects and classes 

let myfunction = (param1:string, param2: number)=>{
    return `${param1} is ${param2} years old `;
}

let usersent:string = myfunction("keyin", 24);
console.log(usersent);

// In the previous tutorial it was to demonstrated how to give static types to objects 
let myobject1: {uninumber:number, uniname:string} = {
    uninumber: 23,
    uniname: "jkuat"
}

// Interfaces can also be used to give objects static types 
interface Myiterfaceob2 {
    uninumber: number,
    uniname: string, 
    // you can make an a property optional by adding ? at the end 
    unilocat?: string
}

let myobject2: Myiterfaceob2 = {
    uniname: "jkuat",
    uninumber: 23,
}