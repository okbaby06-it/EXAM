function checkInfo() {
  const checkInput = (fullName, idUser, hocBa, phieuDiem, content) => {
    if (
      fullName === "" ||
      idUser === "" ||
      (!hocBa && !phieuDiem) ||
      content === ""
    )
      return false;
    return true;
  };

  //check fullName > 5 kí tự
  const checkName = (fullName) => {
    if (fullName.length < 5) return false;
    return true;
  };

  //check cccd > 12 chữ số
  const checkIdUer = (idUser) => {
    if (idUser < 12) return false;
    return true;
  };

  //check hình thức xét tuyển
  const checkHinhThuc = (hocBa, phieuDiem) => {
    if (hocBa && phieuDiem) return false;
    return true;
  };

  //check content > 10 kí tự
  const checkContent = (content) => {
    if (content.length < 12) return false;
    return true;
  };

  const fullName = document.getElementById("nameUser").value;
  const idUser = document.getElementById("idUser").value;
  const hocBa = document.getElementById("hocBa").checked;
  const phieuDiem = document.getElementById("phieuDiem").checked;
  const nganh = document.getElementById("nganh").value;
  const hoTroHocPhi = document.getElementById("hocPhi").checked;
  const content = document.querySelector("textarea").value;

  const hinhThuc = hocBa ? "Học bạ" : "Phiếu điểm";
  const hoTro = hoTroHocPhi
    ? "Ưu tiên đóng học phí đầy đủ!"
    : "Gia đình chính sách";

  if (!checkInput(fullName, idUser, hocBa, phieuDiem, content)) {
    alert("Bạn bắt buộc phải nhập đầy đủ nội dung!");
    return false;
  } else if (!checkName(fullName)) {
    alert("Bạn phải nhập đầy đủ họ và tên!");
    return false;
  } else if (!checkIdUer(idUser)) {
    alert("Bạn phải nhập đầy đủ số CMND/CCCD!");
    return false;
  } else if (!checkHinhThuc(hocBa)) {
    alert("Bạn phải chọn hình thức xét tuyển!");
    return false;
  } else
    alert(
      `Thông tin của bạn đã được gửi\n- Họ Tên: ${fullName}\n- CMND/CCCD: ${idUser}\n- Xét tuyển: ${hinhThuc}\n- Ngành: ${nganh}\n- Hỗ trợ: ${hoTro}\n- Nội dung: ${content}`
    );
  return true;
}
