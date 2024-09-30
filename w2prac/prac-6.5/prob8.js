var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function findMax(arr) {
    let max = arr[0];
       for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];   }
    }
    return max;
}

var maxNumber = findMax(numbers);
console.log(maxNumber);
