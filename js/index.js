$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="dieutuoi" &&  pwd=="20122003"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="indextim.html";},2000);
		}
	else{
		alert("Nhập sai thông tin rồi kìa,Đồ ngốc!");
	}
});
