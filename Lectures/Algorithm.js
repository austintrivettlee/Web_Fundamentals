var a = 25;
a = a - 13;
console.log(a / 2);

a = "hello";
console.log(a + " hello");


/*
6
hello hello
*/


for (let i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);

/*
0
4
8
outside the loop 12
*/

function getTotal(arrayOfNumbers) {

    var sum = 0;

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}
getTotal([1, 3, 5]);
