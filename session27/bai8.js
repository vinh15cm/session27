function getMaxNumberFromDigits(input) {
    if (!Number.isInteger(input) || input < 0) {
        return "dữ liệu không hợp lệ";
    }
    let maxNumber = Number(String(input).split('').sort((a, b) => b - a).join(''));
    
    return maxNumber;
}
console.log(getMaxNumberFromDigits(2941)); 
console.log(getMaxNumberFromDigits(3875)); 
console.log(getMaxNumberFromDigits("1h8t")); 
