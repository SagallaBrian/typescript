// Generics are basically a kind of tool that enables you to create reusable 
// code components that work with a number of types instead of a single type. 
//  The identity function is a function that will return back whatever is passed in 

function myidentyfunction(params:number):number {
    return params ;
}
let myretunstor = myidentyfunction(56);

// The above example is okay but it does not allow us to use multipe types 
// it is tied only to one type you. now generic can be useful in this sense 

function myidentyfunction2<Mytype>(params:Mytype):Mytype {
    return params ;
}

// Now I can return the multiple data types 
let myreturntyp2 = myidentyfunction2<string>("Zeraki");
let myreturntyp3 = myidentyfunction2<number>(45);


// Using Generics with Parameters of Many Types
function myidentyfunction3<Z1, Z2, Z3>(par1:Z1, par2:Z2, par3:Z3):Z2 {
    return par2;
}

let myreturntyp4 = myidentyfunction3<number, number, string>(45, 23, "8y");


// An object parameter 

interface Myiterfaceob2 {
    uninumber: number,
    uniname: string, 
    // you can make an a property optional by adding ? at the end 
    unilocat?: string
}

let myobject6: Myiterfaceob2 = {
    uniname: "jkuat",
    uninumber: 23,
}

function myidentyfunction4<Zx extends object>(myoparam:Zx) {
    return myoparam ;
}

let myreturntyp5 = myidentyfunction4<Myiterfaceob2>(myobject6);

enum Direction {
    Up,
    Down,
    Left,
    Right,
  }