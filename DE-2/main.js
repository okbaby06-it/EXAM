document.querySelector("form").addEventListener("submit", () => {
  //lấy dữ liệu từ các ô
  //ô nhập tên
  const nameUser = document.getElementById("nameUser").value;
  //ô nhập cccd
  const idUser = document.getElementById("idUser").value;
  //ô radio
  const hocBa = document.getElementById("infoUser1").checked;
  const phieuDiem = document.getElementById("infoUser2").checked;
  //ô option
  const nganh = document.getElementById("choose-branch").value;
  //ô textarea
  const content = document.getElementById("content").value;

  if (
    nameUser === "" ||
    idUser === "" ||
    (!hocBa && !phieuDiem) ||
    nganh === "" ||
    content === ""
  ) {
    alert("Vui lòng nhập đầy đủ các ô!");
  } else {
    alert("Thông tin đã được gửi!");
  }
});
