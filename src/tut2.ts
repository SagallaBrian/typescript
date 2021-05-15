// Types are useful in intializing certain properties to variable 
// A type alias is exactly that - a name for any type. 
type username = string | number;
type myobjtyp = {
    num1: number ,
    num2: number
}

let myname:username = "Brian Sagalla" ;

let myobject3: myobjtyp = {
    num1: 21,
    num2: 23,
}


// Working with dom 
let myhtmlel1 = document.getElementById("myelement");
let myhtmlprop1 = myhtmlel1.nodeValue 

// setting to html input 
let myhtmlel2 = document.getElementById("myelement2") as HTMLInputElement;
let myhtmlprop2 = myhtmlel2.value // The value property is now available 
