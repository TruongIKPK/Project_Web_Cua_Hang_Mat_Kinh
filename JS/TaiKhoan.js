
$(document).ready(function(){
    $("#chuacotaikhoan").click(function(event) {
        event.preventDefault(); 
        $('#login').removeClass("show active");
        $('#login-tab').removeClass("active");
        $('#register').addClass("show active");
        $('#register-tab').addClass("active");
    });
});
function KiemTraEmail(){
    let reg = /^[A-Za-z][A-Za-z0-9]+\@[a-z]+\.[a-z]+$/;
    if($("#loginEmail1").val() == "" || $("#loginEmail1").val() == null){
        $("#erremail").show();
        $("#erremail").text("Không được rỗng");
        $("#erremail").addClass("text-danger");
        return false;
    }
    
   if(!reg.test($("#loginEmail1").val())){
        $("#erremail").show();
        $("#erremail").html("Sai định dạng của email");
        $("#erremail").addClass("text-danger");
        return false;
    }

    $("#erremail").hide();
    return true;
}
$("#loginEmail1").blur(function(){
    KiemTraEmail();
});
function KiemTraMatKhau(){
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;
    if($("#loginPassword5").val() == "" || $("#loginPassword5").val() == null){
        $("#errmatkhau").show();
        $("#errmatkhau").text("Không được rỗng");
        $("#errmatkhau").addClass("text-danger");
        return false;
    }
    
   if(!reg.test($("#loginPassword5").val())){
        $("#errmatkhau").show();
        $("#errmatkhau").html("Phải có ít nhất 1 kí tự thường 1 ký tự  hoa 1 ký tự đặt biệt và 1 số và tối thiểu là 6 và tối đa là 20");
        $("#errmatkhau").addClass("text-danger");
        return false;
    }

    $("#errmatkhau").hide();
    return true;
}
$("#loginPassword5").blur(function(){
    KiemTraMatKhau();
});
function dangNhap(event){
    if(KiemTraEmail() && KiemTraMatKhau()){
        var savedAccount = localStorage.getItem("account");
        if (savedAccount) {
            savedAccount = JSON.parse(savedAccount);
            if ($("#loginEmail1").val() === savedAccount.email && $("#loginPassword5").val() === savedAccount.password) {
                alert("Đăng nhập thành công");
                event.preventDefault();
                window.location.href = '../HTML/Acount.html';
            } else {
                alert("Email hoặc mật khẩu không đúng");
            }
        } else {
            alert("Không tìm thấy thông tin tài khoản");
        }
    }else{
        alert("Vui lòng điền đầy đủ thông tin");
    }
}
$("#login1").click(function(event){
    dangNhap(event);
});

export function KiemTraHoTen(){
    let reg = /^([A-Z][a-zA-Z]+[\s]?)*$/;
    if($("#registerName6").val() == "" || $("#registerName6").val() == null){
        $("#errhoten").show();
        $("#errhoten").text("Không được rỗng");
        $("#errhoten").addClass("text-danger");
        return false;
    }
    
   if(!reg.test($("#registerName6").val())){
        $("#errhoten").show();
        $("#errhoten").html("Họ tên chữ đầu tiên viết hoa");
        $("#errhoten").addClass("text-danger");
        return false;
    }

    $("#errhoten").hide();
    return true;
}
$("#registerName6").blur(function(){
    KiemTraHoTen();
});
export function KiemTraLoiSDT1(){
    let reg = /^0[0-9]{9}$/;
    if($("#sDT").val() == "" || $("#sDT").val() == null){
        $("#span_sDT").show();
        $("#span_sDT").text("Không được rỗng");
        $("#span_sDT").addClass("text-danger");
        return false;
    }
    
   if(!reg.test($("#sDT").val())){
        $("#span_sDT").show();
        $("#span_sDT").html("Phải đủ 10 số và bắt đầu là số 0");
        $("#span_sDT").addClass("text-danger");
        return false;
    }

    $("#span_sDT").hide();
    return true;
}
$("#sDT").blur(function(){
    KiemTraLoiSDT1();
});
function KiemTraLoiEmail2(){
    let reg = /^[A-Za-z][A-Za-z0-9]+\@[a-z]+\.[a-z]+$/;
    if($("#email12").val() == "" || $("#email12").val() == null){
        $("#errEmail1").show();
        $("#errEmail1").text("Không được rỗng");
        $("#errEmail1").addClass("text-danger");
        return false;
    }
    
   if(!reg.test($("#email12").val())){
        $("#errEmail1").show();
        $("#errEmail1").html("Sai định dạng của email");
        $("#errEmail1").addClass("text-danger");
        return false;
    }

    $("#errEmail1").hide();
    return true;
}
$("#email12").blur(function(){
    KiemTraLoiEmail2();
});

export function KiemTraMatKhau1(){
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;
    if($("#registerPwd2").val() == "" || $("#registerPwd2").val() == null){
        $("#errPwd1").show();
        $("#errPwd1").text("Không được rỗng");
        $("#errPwd1").addClass("text-danger");
        return false;
    }
    
   if(!reg.test($("#registerPwd2").val())){
        $("#errPwd1").show();
        $("#errPwd1").html("Phải có ít nhất 1 kí tự thường 1 ký tự  hoa 1 ký tự đặt biệt và 1 số và tối thiểu là 6 và tối đa là 20");
        $("#errPwd1").addClass("text-danger");
        return false;
    }

    $("#errPwd1").hide();
    return true;
}
$("#registerPwd2").blur(function(){
    KiemTraMatKhau1();
});
function KiemTraMatKhau2(){
    if($("#registerPwd1").val() == "" || $("#registerPwd1").val() == null){
        $("#errPwd2").show();
        $("#errPwd2").text("Không được rỗng");
        $("#errPwd2").addClass("text-danger");
        return false;
    }
    
   if($("#registerPwd1").val() != $("#registerPwd2").val()){
        $("#errPwd2").show();
        $("#errPwd2").html("Không khớp");
        $("#errPwd2").addClass("text-danger");
        return false;
    }

    $("#errPwd2").hide();
    return true;
}
$("#registerPwd1").blur(function(){
    KiemTraMatKhau2();
});
export function KiemTraNgaySinh(){
    let hienTai =new Date();
    let ngaySinh_ = new Date($("#registerName2").val());
    let age = hienTai.getFullYear() - ngaySinh_.getFullYear();
    if($("#registerName2").val() == "" || $("#registerName2").val() == null){
        $("#spanNgaySinh").show();
        $("#spanNgaySinh").text("Không được rỗng");
        $("#spanNgaySinh").addClass("text-danger");
        return false;
    }
    
   if(age <= 0){
        $("#spanNgaySinh").show();
        $("#spanNgaySinh").html("Năm sinh hớn lơn 1");
        $("#spanNgaySinh").addClass("text-danger");
        return false;
    }

    $("#spanNgaySinh").hide();
    return true;
}
$("#registerName2").blur(function(){
    KiemTraNgaySinh();
});
function KiemTraDongYChinhSach(){

    if($("#chinhSachDY").prop('checked') == false){
        $("#errDongY").show();
        $("#errDongY").text("Bạn chưa đồng ý");
        $("#errDongY").addClass("text-danger");
        return false;
    }

    $("#errDongY").hide();
    return true;
}
function dangKy(event){
    if(KiemTraHoTen() && KiemTraLoiEmail2() && KiemTraLoiSDT1() && KiemTraMatKhau1() && KiemTraMatKhau2() && KiemTraNgaySinh() && KiemTraDongYChinhSach() ){
        let name = $("#registerName6").val();
        let gioitinh = $("#gioitinh").val();
        let phone = $("#sDT").val();
        let email = $("#email12").val();
        let password = $("#registerPwd1").val();
        let city = $("#city").find(":selected").text();
        let district = $("#district").find(":selected").text();
        let ward = $("#ward").find(":selected").text();
        let address1 = city + ', ' + district + ', ' + ward;
        let address =  address1;
        let birthday = $("#registerName2").val();
        let account = {
            name: name,
            gioitinh: gioitinh,
            phone: phone,
            email: email,
            password: password,
            address: address,
            birthday: birthday
        };
        localStorage.setItem("account", JSON.stringify(account));
        alert("Đăng ký thành công!");
        event.preventDefault();
        window.location.href = '../HTML/Acount.html';
    }else{
        alert("Vui lòng điền đầy đủ thông tin");
        return false;
    }
}
$("#logup").click(function(event) {
    dangKy(event);
});
