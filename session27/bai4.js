let numbers = []; // Mảng lưu danh sách số nguyên

// Hàm nhập danh sách số nguyên
function inputNumbers() {
    let count = parseInt(prompt("Nhập số lượng số nguyên:"));
    if (isNaN(count) || count <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    numbers = []; // Xóa danh sách cũ
    for (let i = 0; i < count; i++) {
        let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            alert("Số không hợp lệ! Hãy nhập lại.");
            i--; // Nhập lại nếu không hợp lệ
        }
    }
}

// Hàm tính trung bình các số
function calculateAverage() {
    if (numbers.length === 0) {
        alert("Danh sách số nguyên trống!");
        return;
    }

    let sum = numbers.reduce((total, num) => total + num, 0);
    let avg = sum / numbers.length;
    alert(`Giá trị trung bình: ${avg.toFixed(2)}`);
}

// Hàm tìm số chẵn lớn nhất
function findMaxEven() {
    if (numbers.length === 0) {
        alert("Danh sách số nguyên trống!");
        return;
    }

    let evenNumbers = numbers.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        alert("Không có số chẵn trong danh sách!");
        return;
    }

    let maxEven = Math.max(...evenNumbers);
    alert(`Số chẵn lớn nhất: ${maxEven}`);
}

// Hàm tìm số lẻ nhỏ nhất
function findMinOdd() {
    if (numbers.length === 0) {
        alert("Danh sách số nguyên trống!");
        return;
    }

    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 0) {
        alert("Không có số lẻ trong danh sách!");
        return;
    }

    let minOdd = Math.min(...oddNumbers);
    alert(`Số lẻ nhỏ nhất: ${minOdd}`);
}

// Hàm hiển thị menu và xử lý lựa chọn
function menu() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát"
        );

        switch (choice) {
            case "1":
                inputNumbers();
                break;
            case "2":
                calculateAverage();
                break;
            case "3":
                findMaxEven();
                break;
            case "4":
                findMinOdd();
                break;
            case "5":
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
        }
    }
}

// Gọi menu để bắt đầu chương trình
menu();
