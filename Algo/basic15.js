// // TODO: Print all the integers from 1 to 255.
function print1to255(){
    for(i = 1; i <= 255; i++){
        console.log(i);
    }
}
// print1to255();
// // TODO: Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0to255(){
    sum = 0;
    for(i = 0; i <= 255; i++){
        sum += i;
        console.log(i);
        console.log(sum);
    }
}
// printIntsAndSum0to255();
// TODO: Given an array, find and print its largest element.
function printMaxOfArray(arr){
    max = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}
// printMaxOfArray([1,5,147,9]);
// TODO: Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1to255(){
    var newArr = [];
    for(i = 1; i <= 255; i++){
        if(i % 2 == 1){
            newArr.push(i);
        }
    }
    console.log(newArr);
}
returnOddsArray1to255();
// TODO: Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > y){
            console.log(arr[i]);
        }
    }
}
returnArrayCountGreaterThanY([1,3,5,7,8], 3);

// TODO: Given an array, print the max, min and average values for that array.
function printMaxMinAvgArray(arr){
    var sum = 0;
    var max = 0;
    var min = 0;
    for(i = 0; i <= 255; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < arr[i-1]){
            min = arr[i]
        }
        sum += i;
    }
    console.log(max, min, (sum/arr.length))

}
printMaxMinAvgArray([55, 2, 32, 50, 1]);

// TODO: Replace any negative array values with 'Dojo'.
function swapStringForArrayNeg(arr){
    var newArr = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            newArr.push("Dojo");
        }
        else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
swapStringForArrayNeg([2,-4,5,6,7,-9]);

function swapStringForArrayNeg2(arr){
    for(i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            console.log("Dojo");
        }
        else {
            console.log(arr[i]);
        }
    }
}
    
// TODO: Print all odd integers from 1 to 255.
function printOdds1to255(){
    for(i = 1; i <= 255; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}
printOdds1to255();
// TODO: Iterate through a given array, printing each value.
function printArrayVal(arr){
    for(i = 0;i < arr.length; i++){
        console.log(arr[i]);
    }
}
printArrayVal([1,   3,   5,   7,   9,  11,  13,  15,  17,  19,  21,  23,
            25,  27,  29,  31,  33,  35,  37,  39,  41,  43,  45,  47,
            49,  51,  53,  55,  57,  59,  61,  63,  65,  67,  69,  71])
// TODO: Analyze an array’s values and print the average
function printAvgOfArray(arr){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
}
printAvgOfArray([5,4,3,7,8,9]);

// TODO: Square each value in a given array, returning that same array with changed values
function squareArrayVals(arr){}

// TODO: Return the given array, after setting any negative values to zero.
function zeroOutArrayNegativeVals(arr){}

// TODO: Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
function shiftArrayValsLeft(arr){}