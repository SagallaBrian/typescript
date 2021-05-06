var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var myobject4 = {
    myphone: "Samsung",
    mylaptop: "hp"
};
var myfunction2 = function (params) {
    return __assign(__assign({}, params), { "hh": "89" });
};
var myobject5 = myfunction2(myobject4);
console.log(myobject5);
