// ===== AUTH FUNCTIONS =====
function handleLogin(e) {
    e.preventDefault();
    
    // Lưu ý: Đã sửa ID trong HTML để khớp với getElementById ở đây
    const tenDangNhap = document.getElementById('dangnhap-tendangnhap').value;
    const matKhau = document.getElementById('dangnhap-matkhau').value;
    
    const nguoiDungs = JSON.parse(localStorage.getItem('tutien_nguoidungs')) || [];
    const nguoiDung = nguoiDungs.find(u => 
        (u.tenDangNhap === tenDangNhap || u.email === tenDangNhap) && u.matKhau === matKhau
    );
    
    if (nguoiDung) {
        // Lưu thông tin người dùng hiện tại
        localStorage.setItem('tutien_currentUser', JSON.stringify({
            id: nguoiDung.id,
            username: nguoiDung.tenDangNhap,
            email: nguoiDung.email,
            points: nguoiDung.diem
        }));
        
        // Gọi các hàm từ java.js thông qua window object
        if (typeof window.closeAllModals === 'function') window.closeAllModals();
        if (typeof window.updateUI === 'function') window.updateUI();
        if (typeof window.showNotification === 'function') window.showNotification('Đăng nhập thành công!', 'success');
        
        document.getElementById('form-dang-nhap').reset();
    } else {
        if (typeof window.showNotification === 'function') window.showNotification('Tên đăng nhập hoặc mật khẩu không đúng!', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const tenDangNhap = document.getElementById('dangky-tendangnhap').value;
    const email = document.getElementById('dangky-email').value;
    const matKhau = document.getElementById('dangky-matkhau').value;
    const xacNhanMatKhau = document.getElementById('dangky-xacnhanmatkhau').value;
    
    if (matKhau !== xacNhanMatKhau) {
        if (typeof window.showNotification === 'function') window.showNotification('Mật khẩu xác nhận không khớp!', 'error');
        return;
    }
    
    if (matKhau.length < 6) {
        if (typeof window.showNotification === 'function') window.showNotification('Mật khẩu phải có ít nhất 6 ký tự!', 'error');
        return;
    }
    
    const nguoiDungs = JSON.parse(localStorage.getItem('tutien_nguoidungs')) || [];
    
    const nguoiDungTonTai = nguoiDungs.find(u => u.tenDangNhap === tenDangNhap || u.email === email);
    if (nguoiDungTonTai) {
        if (typeof window.showNotification === 'function') window.showNotification('Tên đăng nhập hoặc email đã tồn tại!', 'error');
        return;
    }
    
    const nguoiDungMoi = {
        id: Date.now(),
        tenDangNhap,
        email,
        matKhau,
        ngayThamGia: new Date().toISOString().split('T')[0],
        capDo: 'Luyện Khí Kỳ',
        soTruyen: 0,
        diem: 0,
        nguoiTheoDoi: 0
    };
    
    nguoiDungs.push(nguoiDungMoi);
    localStorage.setItem('tutien_nguoidungs', JSON.stringify(nguoiDungs));
    
    // Tự động đăng nhập sau khi đăng ký
    localStorage.setItem('tutien_currentUser', JSON.stringify({
        id: nguoiDungMoi.id,
        username: nguoiDungMoi.tenDangNhap,
        email: nguoiDungMoi.email,
        points: 0
    }));
    
    if (typeof window.closeAllModals === 'function') window.closeAllModals();
    if (typeof window.updateUI === 'function') window.updateUI();
    if (typeof window.showNotification === 'function') window.showNotification('Đăng ký thành công! Đã bắt đầu tu luyện!', 'success');
    
    document.getElementById('form-dang-ky').reset();
}

function handleLogout() {
    localStorage.setItem('tutien_currentUser', null);
    if (typeof window.updateUI === 'function') window.updateUI();
    if (typeof window.navigateToSection === 'function') window.navigateToSection('hero-section');
    if (typeof window.showNotification === 'function') window.showNotification('Đã đăng xuất!', 'info');
}

// Export functions to global scope so java.js can find them
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.handleLogout = handleLogout;

// Hàm sửa thông tin tài khoản
function handleUpdateProfile(e) {
    e.preventDefault();
    
    // Kiểm tra xem đạo hữu đã nhập môn (đăng nhập) chưa
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    
    // Nếu chưa đăng nhập, phải hiện thông báo rồi mới dừng
    if (!currentUser || currentUser === null) {
        if (typeof window.showNotification === 'function') {
            window.showNotification('Đạo hữu phải đăng nhập mới có thể tu chỉnh đạo hiệu!', 'error');
        }
        // Tự động mở modal đăng nhập để hỗ trợ người dùng
        if (typeof window.openModal === 'function') {
            const modalDN = document.getElementById('modal-dang-nhap');
            window.openModal(modalDN);
        }
        return;
    }

    const newUsername = document.getElementById('sua-bietdanh').value.trim();
    const newPassword = document.getElementById('sua-matkhau').value.trim();
    
    let nguoiDungs = JSON.parse(localStorage.getItem('tutien_nguoidungs')) || [];
    const userIndex = nguoiDungs.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {
        let isChanged = false;

        if (newUsername) {
            nguoiDungs[userIndex].tenDangNhap = newUsername;
            currentUser.username = newUsername;
            isChanged = true;
        }
        
        if (newPassword) {
            if (newPassword.length < 6) {
                if (typeof window.showNotification === 'function') {
                    window.showNotification('Mật pháp quá yếu (ít nhất 6 ký tự)!', 'error');
                }
                return;
            }
            nguoiDungs[userIndex].matKhau = newPassword;
            isChanged = true;
        }

        if (!isChanged) {
            if (typeof window.showNotification === 'function') {
                window.showNotification('Đạo hữu chưa nhập thông tin mới!', 'info');
            }
            return;
        }

        localStorage.setItem('tutien_nguoidungs', JSON.stringify(nguoiDungs));
        localStorage.setItem('tutien_currentUser', JSON.stringify(currentUser));

        if (typeof window.updateUI === 'function') window.updateUI();
        if (typeof window.showNotification === 'function') {
            window.showNotification('Cập nhật công pháp thành công!', 'success');
        }
        
        e.target.reset();
    }
}
window.handleUpdateProfile = handleUpdateProfile;

// Xuất hàm ra phạm vi toàn cục
window.handleUpdateProfile = handleUpdateProfile;