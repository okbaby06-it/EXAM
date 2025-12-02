function checkInfo() {
  //lấy dữ liệu từ các ô nhập liệu
  const nganhHang = document.getElementById("loaiHinh").value;
  const tenSP = document.getElementById("nameSP").value;
  const maSP = document.getElementById("maSP").value;
  const conHang = document.getElementById("conHang").checked;
  const hetHang = document.getElementById("hetHang").checked;
  const moTa = document.getElementById("moTa").value;

  //check xem các ô nhập liệu có bị bỏ trống hay không
  if (nganhHang === "" || tenSP === "" || maSP === "" || moTa === "") {
    alert("Bạn bắt buộc phải nhập đầy đủ thông tin!");
    return false;
  } else {
    alert("Dữ liệu đã được gửi thành công!");
    return true;
  }
}
