function circleArea() {
    let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (isNaN(radius) || radius <= 0) {
        alert("Bán kính không hợp lệ!");
        return;
    }
    let area = Math.PI * Math.pow(radius, 2);
    alert(`Diện tích hình tròn: ${area.toFixed(2)}`);
}

function circlePerimeter() {
    let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (isNaN(radius) || radius <= 0) {
        alert("Bán kính không hợp lệ!");
        return;
    }
    let perimeter = 2 * Math.PI * radius;
    alert(`Chu vi hình tròn: ${perimeter.toFixed(2)}`);
}

function rectangleArea() {
    let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    let height = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        alert("Kích thước không hợp lệ!");
        return;
    }

    let area = width * height;
    alert(`Diện tích hình chữ nhật: ${area.toFixed(2)}`);
}

function rectanglePerimeter() {
    let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    let height = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        alert("Kích thước không hợp lệ!");
        return;
    }

    let perimeter = 2 * (width + height);
    alert(`Chu vi hình chữ nhật: ${perimeter.toFixed(2)}`);
}

function menu() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát"
        );

        switch (choice) {
            case "1":
                circleArea();
                break;
            case "2":
                circlePerimeter();
                break;
            case "3":
                rectangleArea();
                break;
            case "4":
                rectanglePerimeter();
                break;
            case "5":
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
        }
    }
}

menu();
