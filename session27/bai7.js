function findMissingNumber(arr) {
    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(Number.isInteger)) {
        return "dữ liệu không hợp lệ";
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }

    return "Không có số bị thiếu"; // Trường hợp không thiếu số nào
}

// Kiểm tra với các bộ dữ liệu mẫu
console.log(findMissingNumber([1, 2, 3, 5]));  
// Output: 4

console.log(findMissingNumber([1, 2, 4, 5]));  
// Output: 3

console.log(findMissingNumber("abc"));  
// Output: "dữ liệu không hợp lệ"
