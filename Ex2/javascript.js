let arr = [1, 2, 3, 4, 0, 31, null];

function checkForPrime(number){
    if((number > 1000) || (number < 0)){
        console.log('error: please enter number from 0 to 10000');
        return;
    };

    for(let divider = 2; divider < (number / 2); divider++){
        if(number % divider == 0){
            console.log('it is not a prime number');
            return false;
        };
    };
    console.log('it is the prime number');
    return true;
};


checkForPrime(199);
