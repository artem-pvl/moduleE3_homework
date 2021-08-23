function getNumber(num){
    return function(num2){
        return num + num2;
    };
};

let funct2 = getNumber(1);
console.log(funct2(3));
