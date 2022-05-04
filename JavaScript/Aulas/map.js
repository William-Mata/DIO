const valores = [5,1,4,6,7,8];

const mult = {value: 2,}

console.log(valores.map(function (val) {
    return val * this.value;
 }, mult));

console.log(valores.map((num) => num * num));