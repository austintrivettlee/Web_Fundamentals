
var numbers = [3, 4, -2, 7, 16, -8, 0];

// 0 is treated as positive in arithmetic 

// RIOT WALK
// R read/restate
// I input - an array of ints
// O output - an int the equals the amount of inputs that meet the qualifier
// T talk

// W 
// A
// L
// K



var arr1 = [42, 3, 12, 8, 7, 89]


function reverseArray(arr) {
    var temp = 0;
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr
}

reverseArray(arr1);
console.log(arr1);









const items = [1,2,3];

console.log(items.reverse());

