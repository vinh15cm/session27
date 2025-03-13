function chunkArray(arr, size) {
    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (!Array.isArray(arr) || typeof size !== "number" || size <= 0) {
        return "dữ liệu không hợp lệ";
    }

    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

// Kiểm tra với các bộ dữ liệu mẫu
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); 
// Output: [[1,2,3], [4,5,6], [7,8]]

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); 
// Output: [[1,2], [3,4], [5,6], [7,8]]

console.log(chunkArray("abc", 3)); 
// Output: "dữ liệu không hợp lệ"
