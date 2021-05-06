// Generics are basically a kind of tool that enables you to create reusable 
// code components that work with a number of types instead of a single type. 
//  The identity function is a function that will return back whatever is passed in 
function myidentyfunction(params) {
    return params;
}
var myretunstor = myidentyfunction(56);
// The above example is okay but it does not allow us to use multipe types 
// it is tied only to one type you. now generic can be useful in this sense 
function myidentyfunction2(params) {
    return params;
}
// Now I can return the multiple data types 
var myreturntyp2 = myidentyfunction2("Zeraki");
var myreturntyp3 = myidentyfunction2(45);
// Using Generics with Parameters of Many Types
function myidentyfunction3(par1, par2, par3) {
    return par2;
}
var myreturntyp4 = myidentyfunction3(45, 23, "8y");
var myobject6 = {
    uniname: "jkuat",
    uninumber: 23
};
function myidentyfunction4(myoparam) {
    return myoparam;
}
var myreturntyp5 = myidentyfunction4(myobject6);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
