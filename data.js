// data.js
function khoiTaoDuLieu() {
    // console.log('Hệ thống: Đang kiểm tra linh khí (Dữ liệu)...');
    
    // Chỉ khởi tạo nếu chưa có dữ liệu trong máy người dùng
    if (!localStorage.getItem('tutien_nguoidungs')) {
        const nguoiDungMau = [
            {
                id: 1,
                tenDangNhap: 'Cửu U Chân Nhân',
                email: 'cuuu@example.com',
                matKhau: 'password123',
                ngayThamGia: '2023-01-15',
                capDo: 'Kim Đan Kỳ',
                soTruyen: 3,
                diem: 1250,
                nguoiTheoDoi: 45
            },
            {
                id: 2,
                tenDangNhap: 'Thần Võ Tôn Giả',
                email: 'thanvo@example.com',
                matKhau: 'password123',
                ngayThamGia: '2023-03-22',
                capDo: 'Nguyên Anh Kỳ',
                soTruyen: 5,
                diem: 2100,
                nguoiTheoDoi: 78
            }
        ];
        localStorage.setItem('tutien_nguoidungs', JSON.stringify(nguoiDungMau));
        console.log('Hệ thống: Đã tạo dữ liệu mẫu thành công!');
    }
}