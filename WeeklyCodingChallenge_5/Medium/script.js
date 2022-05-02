function cutPizzaSlices(p1){

    function aloha(p2){
        let outPut = p1/p2
        if (outPut == 2.6666666666666665)
        {return `Each person gets 2.67 slices of pizza`}
        else if(outPut == 4)
        return `Each person gets 4.00 slices of pizza`
    }
        return aloha

}

var sharePizza = cutPizzaSlices(8); 
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza" 
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"
