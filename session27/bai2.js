let students = []; // Mảng lưu danh sách sinh viên

// Hàm nhập danh sách sinh viên
function addStudents() {
    let count = parseInt(prompt("Nhập số lượng sinh viên:"));
    if (isNaN(count) || count <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    for (let i = 0; i < count; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`).trim();
        if (name) {
            students.push(name);
        } else {
            alert("Tên sinh viên không hợp lệ!");
            i--; // Yêu cầu nhập lại nếu tên trống
        }
    }
}

// Hàm hiển thị danh sách sinh viên
function showStudents() {
    if (students.length === 0) {
        alert("Danh sách sinh viên trống!");
        return;
    }
    alert("Danh sách sinh viên:\n" + students.join("\n"));
}

// Hàm tìm kiếm sinh viên theo tên
function findStudent() {
    let name = prompt("Nhập tên sinh viên cần tìm:").trim();
    if (!name) {
        alert("Tên không hợp lệ!");
        return;
    }

    let found = students.filter(student => student.toLowerCase().includes(name.toLowerCase()));

    if (found.length > 0) {
        alert("Sinh viên tìm thấy:\n" + found.join("\n"));
    } else {
        alert("Không tìm thấy sinh viên trong danh sách!");
    }
}

// Hàm xóa sinh viên theo tên (xóa sinh viên đầu tiên tìm thấy)
function deleteStudent() {
    let name = prompt("Nhập tên sinh viên cần xóa:").trim();
    if (!name) {
        alert("Tên không hợp lệ!");
        return;
    }

    let index = students.findIndex(student => student.toLowerCase() === name.toLowerCase());

    if (index !== -1) {
        students.splice(index, 1);
        alert(`Đã xóa sinh viên: ${name}`);
    } else {
        alert("Không tìm thấy sinh viên cần xóa!");
    }
}

// Hàm hiển thị menu và thực hiện chức năng
function menu() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách sinh viên\n" +
            "2. Hiển thị danh sách sinh viên\n" +
            "3. Tìm sinh viên theo tên\n" +
            "4. Xóa sinh viên theo tên\n" +
            "5. Thoát"
        );

        switch (choice) {
            case "1":
                addStudents();
                break;
            case "2":
                showStudents();
                break;
            case "3":
                findStudent();
                break;
            case "4":
                deleteStudent();
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
