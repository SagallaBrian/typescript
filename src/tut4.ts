interface PhnInterface {

}

class Phones {
    private phn_brand: string;
    phn_year: string;
    readonly myclassid:string
    phn_country: string;

    constructor(brand: string, year: string, country?: string) {
        this.phn_brand = brand;
        this.phn_year = year;
        this.myclassid = "class89" ;
        this.phn_country = country
    }

    phndisp() {
        return `${this.phn_brand} was started in ${this.phn_year}`;
    }   
    
    phnsetvl (myval:string){
        this.phn_brand = myval
    }
}

let myphon = new Phones("Samsung", "2012");
myphon.phnsetvl("Iphone")
console.log(myphon);

(()=>{
    var a = 3
    console.log("Arrow function", a);
})();