
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

function countPositivesInArray(arrParam) {
    var countPositives = 0;

    for (var i = 0; i < arrParam.length; i++) {
        if (arrParam[i] > 0) {
            countPositives += 1
        }
    }


    console.log("there are " + countPositives + " positive values");
}

countPositivesInArray(numbers);
