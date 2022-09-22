

function sum(array, finish = false){
    let total = 0;
    let length = array.length;
    for (let i = 0; i < array.length; i++){
        if(finish){
            console.log(total + " + " + array[i] + " = " + (total + array[i]))
        }
        total += array[i]

    }
    console.log(total + " / " + length +  " = " + (total / length))
    total /= length
    return "Average: " + total
}
console.log(sum([6,4,1,9], true))