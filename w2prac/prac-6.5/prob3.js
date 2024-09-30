let num = [2, 3, 5, 8, 1, 4, 7, 6, 9, 10, 13, 12, 11, 14, 16, 15, 17, 19, 18, 20];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(num);
console.log(num);
