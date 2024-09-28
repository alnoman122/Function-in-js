function sumOfnumbers(numbers){
    let sum=0;
    for (const number of numbers){
        console.log(number)
        sum = sum + number;
        
    }

    return  sum;
}
const numbs = [11,33,4,44];
const sum = sumOfnumbers(numbs);
console.log(sum); 