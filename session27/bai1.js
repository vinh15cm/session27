function calculator() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n" +
            "1. Cộng hai số\n" +
            "2. Trừ hai số\n" +
            "3. Nhân hai số\n" +
            "4. Chia hai số\n" +
            "5. Thoát"
        );

        if (choice === "5") {
            alert("Thoát chương trình.");
            break;
        }

        let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
        let num2 = parseFloat(prompt("Nhập số thứ hai:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Vui lòng nhập số hợp lệ!");
            continue;
        }

        let result;
        switch (choice) {
            case "1":
                result = num1 + num2;
                alert(`Kết quả: ${num1} + ${num2} = ${result}`);
                break;
            case "2":
                result = num1 - num2;
                alert(`Kết quả: ${num1} - ${num2} = ${result}`);
                break;
            case "3":
                result = num1 * num2;
                alert(`Kết quả: ${num1} * ${num2} = ${result}`);
                break;
            case "4":
                if (num2 === 0) {
                    alert("Lỗi: Không thể chia cho 0!");
                } else {
                    result = num1 / num2;
                    alert(`Kết quả: ${num1} ÷ ${num2} = ${result}`);
                }
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
        }
    }
}

calculator();
