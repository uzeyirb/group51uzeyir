var arr = [2, 17, 21, 8, 6, 11, 12, 101 ]

var indexes = []

for( let i in arr){

    if( arr[i] % 2 === 0){
        indexes.push(i);
    }
}

console.log("indexes", indexes);

