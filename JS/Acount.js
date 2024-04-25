$(document).ready(function(){
    var savedAccount = localStorage.getItem("account");
    savedAccount = JSON.parse(savedAccount);
    $("#hoTen").text(savedAccount.name);
    $("#ngaySinh").text(savedAccount.birthday);
    $("#email").text(savedAccount.email);
    $("#soDienThoat").text(savedAccount.phone);
    $("#gioiTinh").text(savedAccount.gioitinh);
    $("#diaChi").text(savedAccount.address);

    $("#diaChis1").text(savedAccount.address);
    let words = savedAccount.name.split(" ");
    let lastWord = words[words.length - 1];
    let nameDN = "Xin Chào " + lastWord; 
    $("#tenDangNhap").text(nameDN);

    $("#suaTen").click(function(event) {
        event.preventDefault();
        let isEditing = $(this).data('isEditing');
        if (isEditing) {
            var newText = $("#hoTen").val();
            var divElement = $("<div>");
            divElement.attr("id", "hoTen");
            divElement.addClass("col-6");
            divElement.text(newText); 
            $("#hoTen").replaceWith(divElement);
            $(this).data('isEditing', false);
            if(KiemTraHoTen(newText)){
                var account = JSON.parse(localStorage.getItem("account"));
                account.name = newText;
                localStorage.setItem("account", JSON.stringify(account));
            }else{
                alert("Vui lòng viết in hoa từ đầu tiên");
            }
        } else {
            var inputElement = $("<input>");
            inputElement.attr("type", "text");
            inputElement.attr("id", "hoTen");
            inputElement.addClass("col-6");
            inputElement.val($("#hoTen").text());
            $("#hoTen").replaceWith(inputElement);
            $(this).data('isEditing', true);
        }
    });
    $("#suaNgaySinh").click(function(event) {
        event.preventDefault();
        let isEditing = $(this).data('isEditing');
        if (isEditing) {
            let newText = $("#ngaySinh").val();
            let divElement = $("<div>");
            divElement.attr("id", "ngaySinh");
            divElement.addClass("col-6");
            divElement.text(newText); 
            $("#ngaySinh").replaceWith(divElement);
            $(this).data('isEditing', false);
            if(KiemTraNgaySinh(newText)){
                var account = JSON.parse(localStorage.getItem("account"));
                account.birthday = newText;
                localStorage.setItem("account", JSON.stringify(account));
            }else{
                alert("Năm sinh lớn hơn 0");
            }
        } else {
            var inputElement = $("<input>");
            inputElement.attr("type", "date");
            inputElement.attr("id", "ngaySinh");
            inputElement.addClass("col-6");
            inputElement.val($("#ngaySinh").text());
            $("#ngaySinh").replaceWith(inputElement);
            $(this).data('isEditing', true);
        }
    });
    $("#suasoDienThoai").click(function(event) {
        event.preventDefault();
        let isEditing = $(this).data('isEditing');
        if (isEditing) {
            let newText = $("#soDienThoai").val();
            let divElement = $("<div>");
            divElement.attr("id", "soDienThoai");
            divElement.addClass("col-6");
            divElement.text(newText); 
            $("#soDienThoai").replaceWith(divElement);
            $(this).data('isEditing', false);
            var account = JSON.parse(localStorage.getItem("account"));
            account.phone = newText;
            localStorage.setItem("account", JSON.stringify(account));
        } else {
            let inputElement = $("<input>");
            inputElement.attr("type", "text");
            inputElement.attr("id", "soDienThoai");
            inputElement.addClass("col-6");
            inputElement.val($("#soDienThoai").text());
            $("#soDienThoai").replaceWith(inputElement);
            $(this).data('isEditing', true);
        }
    });
    $("#suagioiTinh").click(function(event) {
        event.preventDefault();
        let isEditing = $(this).data('isEditing');
        if (isEditing) {
            let newText = $("#gioiTinh").val();
            let divElement = $("<div>");
            divElement.attr("id", "gioiTinh");
            divElement.addClass("col-6");
            divElement.text(newText); 
            $("#gioiTinh").replaceWith(divElement);
            $(this).data('isEditing', false);
            var account = JSON.parse(localStorage.getItem("account"));
            account.gioitinh = newText;
            localStorage.setItem("account", JSON.stringify(account));
        } else {
            let selectElement = $("<select>");
            selectElement.attr("id", "gioiTinh");
            selectElement.addClass("col-6");
            var options = ["Nam", "Nữ", "Khác"];
            options.forEach(option => {
                var optionElement = $("<option>");
                optionElement.val(option);
                optionElement.text(option);
                selectElement.append(optionElement);
            });
            selectElement.val($("#gioiTinh").text());
            $("#gioiTinh").replaceWith(selectElement);
            $(this).data('isEditing', true);
        }
    });
    $("#doimatkhau").click(function(event) {
        event.preventDefault();
        var isHidden = $("#inputMkCu").is(":hidden");
        if (isHidden) {
            $("#inputMkCu").show();
            $("#inputMkMoi").show();
        } else {
            var savedAccount = localStorage.getItem("account");
            savedAccount = JSON.parse(savedAccount);
            if(savedAccount.password == $("#mkcu").val()){
                let newText = $("#mkmoi").val();
                if(KiemTraMatKhau1(newText)){
                    var account = JSON.parse(localStorage.getItem("account"));
                    account.password = $("#mkmoi").val();
                    localStorage.setItem("account", JSON.stringify(account));
                    alert("Cập nhật thành công");
                }else{
                    alert("Mật khẩu sai định dạng phải có ít nhất 1 ký tự đặc biệt, 1 ký tự thường, 1 ký tự hoa, 1 kí tự số");
                }
                $("#inputMkCu").hide();
                $("#inputMkMoi").hide();
            }else{
                $("#inputMkCu").hide();
                $("#inputMkMoi").hide();
                alert("Mật khẩu cũ sai!");
            }   
        }
    });
});
function KiemTraHoTen(newText){
    let reg = /^([A-Z][a-zA-Z]+[\s]?)*$/;
    if(newText == "" || newText == null){
        return false;
    }
   if(!reg.test(newText)){
        return false;
    }
    return true;
}

function KiemTraNgaySinh(newText){
    let hienTai =new Date();
    let ngaySinh_ = new Date(newText);
    let age = hienTai.getFullYear() - ngaySinh_.getFullYear();
    if(newText == "" || newText == null){
        return false;
    }
   if(age <= 0){
        return false;
    }
    return true;
}
function KiemTraMatKhau1(newText){
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;
    if(newText == "" || newText == null){
        return false;
    }  
   if(!reg.test(newText)){
        return false;
    }
    return true;
}