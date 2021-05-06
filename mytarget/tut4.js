var Phones = /** @class */ (function () {
    function Phones(brand, year, country) {
        this.phn_brand = brand;
        this.phn_year = year;
        this.myclassid = "class89";
        this.phn_country = country;
    }
    Phones.prototype.phndisp = function () {
        return this.phn_brand + " was started in " + this.phn_year;
    };
    Phones.prototype.phnsetvl = function (myval) {
        this.phn_brand = myval;
    };
    return Phones;
}());
var myphon = new Phones("Samsung", "2012");
myphon.phnsetvl("Iphone");
console.log(myphon);
(function () {
    var a = 3;
    console.log("Arrow function", a);
})();
