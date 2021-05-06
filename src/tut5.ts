let myobject4: { myphone: string, mylaptop: string } = {
    myphone: "Samsung",
    mylaptop: "hp"
}

let myfunction2 = (params)=>{
    return {
        ...params,"hh":"89"
    }
}

let myobject5 = myfunction2(myobject4);
console.log(myobject5)