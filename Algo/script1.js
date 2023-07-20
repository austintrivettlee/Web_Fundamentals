var arr2d = [ [2, 5, 8],[3, 6, 1],[5, 7, 7] ];

function flatten(arr) {
    var flat = [];

    for(var i = 0; i < arr.length ; i++){
        for(var j = 0; j < arr[i].length ; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    arr = flat
    return
}

flatten(arr2d);

console.log(arr2d)

