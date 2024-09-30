var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function getUnique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

var uniqueNumbers = getUnique(numbers);
console.log(uniqueNumbers);
