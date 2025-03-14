function sortEvenNumbers(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "dữ liệu không hợp lệ";
    }
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let evenIndex = 0;
    let result = arr.map(num => (num % 2 === 0 ? evenNumbers[evenIndex++] : num));

    return result;
}


console.log(sortEvenNumbers([5, 8, 6, 3, 4, 2, 7])); 
console.log(sortEvenNumbers([5, 9, 6, 4, 1, 8, 3])); 
console.log(sortEvenNumbers("abc")); 
