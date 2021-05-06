let mystring: string = "Brian";

let mystring2:string = `hey there 
I love coding` ;

let myage: number = 28;

let gotjob: boolean = true;

let arrnum: number[] = [2, 3, 5, 7, 11]

let arrstr: string[] = ["Brian", "Sagalla", "Lwatati",]

let myraob: { uninumber: number, uniname: string } = {
    uninumber: 23,
    uniname: "jkuat"
}

// You can also have the or operator when it comes 
// static type declaration 
//  A union type is type formed from two or more other types, 
// representing values that may be any one of those types. 
// We refer to each of these types as the union’s members.

let mystringornum: string | number = 4;
mystringornum = "four"
