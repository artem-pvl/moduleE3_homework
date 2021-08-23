let arr = [1, 2, 3, 4, 0, 31, null];

function getParity(array){
    let oddQantity = 0;
    let evenQuantity = 0;
    let ziroQuantity = 0;

    for(let i = 0; i < array.length; i++){
        num = Number(elemnt)
        console.log(`${elemnt}`)
        if( (num != NaN) && (Math.abs(num) != Infinity) ){
            if(num === 0){
                ziroQuantity++;
            } else if( (num % 2) == 0){
                oddQantity++;
            } else {
                evenQuantity++;
            }
        };
    };

    console.log(`even's: ${evenQuantity}`);
    console.log(`odd's: ${oddQantity}`);
    console.log(`ziro's: ${ziroQuantity}`);
};

getParity(arr);
