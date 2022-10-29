const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// tạo phần đăng kí
function btnSignup(e) {
  event.preventDefault();

  var username = document.getElementById("username_signup").value;
  var email = document.getElementById("email_signup").value;
  var password = document.getElementById("password_signup").value;
  var confirmPassword = document.getElementById("confirm_password_signup").value;

  var user = {
    username: username,
    email: email,
    password: password,
  }

  if (!username || !email || !password || !confirmPassword) {
    alert("Vui lòng điền đầy đủ thông tin");
  }else if(password != confirmPassword){
    alert("Vui lòng nhập đúng Password!");
  }
   else {
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng kí thành công");
  }
  
}


// tạo phần đăng nhập
function btnlogin(e) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
 
  var data = JSON.parse(user);
  if (user == null) {
    alert("Vui lòng nhập lại name password")
  }
  else if (username == data.username && email == data.email && password == data.password) {
    alert("Đăng nhập thành công");
    window.location.href = "/project/index.html"
  }
  else {
    alert("Đăng nhập thất bại")
  }
}
