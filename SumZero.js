//Checking sum zero - Problem 1
//[-5,-4,-3,-2,0,2,4,6,8] -> input
//[-4,4] -> output

function getSumZeroPair(array){
    for (let number of array){
        console.log("Outer loop")
        // console.log(number)
        for(let j=1;j<array.length;j++){
            console.log("Inner loop")
            if(number + array[j]==0){
                return [number,array[j]];

            }
        } 
    }
}
const result = getSumZeroPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);

//o(n^2) quadratic time complexity