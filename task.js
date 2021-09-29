let numbers = ([5, 8, 0, 1, 9, 11, 15, 16]);

function ascendingSort(array) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {

            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return array;
}

function descendingSort(array) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {

            if (numbers[j] < numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return array
}

//printing results
console.log("Original numbers list: ", numbers);
console.log("Numbers list After sorting: ", ascendingSort(numbers));
console.log("Numbers list After Desc sorting: ", descendingSort(numbers));

//changing the string elements
numbers = ([66, 9, 00, 2, 1, 8, 44]);

console.log("Original numbers list: ", numbers);
console.log("Numbers list After sorting: ", ascendingSort(numbers));
console.log("Numbers list After Desc sorting: ", descendingSort(numbers));



//opening the file



//no matter what kind of method I used it showed an error
fetch('data.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(ascendingSort(data));
    });
//store in output.txt....