function isArithmeticSequence(arr) {
    // Kiểm tra dữ liệu đầu vào hợp lệ
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(Number.isInteger)) {
        return "dữ liệu không hợp lệ";
    }

    let difference = arr[1] - arr[0]; // Tính khoảng cách giữa hai phần tử đầu tiên

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            return false;
        }
    }

    return true;
}

// Kiểm tra với các bộ dữ liệu mẫu
console.log(isArithmeticSequence([2, 4, 6, 8]));    
// Output: TRUE (là cấp số cộng, d = 2)

console.log(isArithmeticSequence([3, 6, 9, 12, 14])); 
// Output: FALSE (không phải cấp số cộng)

console.log(isArithmeticSequence("abc")); 
// Output: "dữ liệu không hợp lệ"
