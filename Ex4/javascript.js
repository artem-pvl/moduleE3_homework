function lazyCounter(from, to){
    let count = from;

    let intevalCounter = setInterval(function(end, cb){
        console.log(count);
        count++;
        if(count > end){
            cb();
        };
    }, 1000, to, stopCounter);

    function stopCounter(){
        clearInterval(intevalCounter);
    };
};

lazyCounter(4, 20);
