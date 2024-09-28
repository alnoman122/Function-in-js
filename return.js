function tentimes(num){
    const result = num * 10;
    return result;
}
tentimes(3);

const output = tentimes(3);
console.log('output', output)




function add(price1 , price2){
    // const total = price1 + price2;
    // return total; 
    return price1+price2;
}
const bill = add(4,33);

console.log(bill);



function domath (num1, num2){
    const sum= num1 + num2;
    const diff = num1 - num2;
    const multify = sum * diff;
    const result= multify /3;
    return result;

}
const result = domath(6,3);
console.log(result);


//conditional return
function  isEven(numbers){
    if (numbers % 2 === 0) {
        return true;
        } else {
            return false;
            }
            }
            const isresult = isEven(5);
            console.log(isresult);
            // console.log(isEven(5)); // false
            // console.log(isEven(10)); // true
            // console.log(isEven(7)); // false
            // console.log(isEven(9)); // false
            // console.log(isEven(8)); // true


