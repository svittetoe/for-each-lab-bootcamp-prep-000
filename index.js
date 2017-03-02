function iterativeLog(array) {//Open iterativeLog
array.forEach(function (element, index){//Open forEach
console.log(`${index}: ${element}`);
});//Close forEach
}//Close iterativeLog

function iterate(callback) {//Open iterate
array = ['r', 'o', 'y', 'g', 'b', 'i', 'v'];//initialize array
array.forEach(callback); {//Open forEach
}//Close forEach
return array;
}//Close iterate

function doToArray(array, callback) {//Open function
array.forEach(callback)
}//Close function
