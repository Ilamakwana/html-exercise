// ******************** Registration page coding ***************************

var arr = [];
function register(){

var email = document.forms['myForm']['email'].value;
var x = email.indexOf('@');
var y = email.lastIndexOf('.');

var firstName =document.getElementById('firstNameId').value;
var lastName = document.getElementById('lastNameId').value;
var userName = document.getElementById('userNameId').value;
var emailAddress = document.getElementById('emailId').value;
var email_confirm = document.getElementById('email_confirm').value;
var phone = document.getElementById('phone').value;
var date = document.getElementById('dateId').value;
var password = document.getElementById('passwordId').value;
var password_confirm = document.getElementById('password_confirmation').value;

// **********************    form validation    *****************************
if(firstName == ''){

document.getElementById('formvalidation').innerHTML = 'Please Enter Your Name';

return;
}
else if(lastName == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your Last Name';
return;
}
else if(userName == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your User Name';
return;
}
else if(x < 1 || y < x+2 || y+2 >= email.length){
    document.getElementById('formvalidation').innerHTML = 'Please Enter Your Email like example@gmail.com';
    return;
}
else if(email_confirm == ''){
    document.getElementById('formvalidation').innerHTML = 'Please Confirm Your Email';
    return;
}
else if(email_confirm !== email){
    document.getElementById('formvalidation').innerHTML = 'Emails does not match Enter correct Email';
    return;
}
else if(phone == ''){
    document.getElementById('formvalidation').innerHTML = 'Please Enter Your Phone Number';
    return;
}
else if(phone.length!= 10 && (phone.indexOf('9')!=1 || phone.indexOf('8')!=1 || phone.indexOf('7')!=1)){
    document.getElementById('formvalidation').innerHTML = 'Please Enter Your Correct Your Phone Number';
    return;
}
else if(date == null){
    document.getElementById('formvalidation').innerHTML = 'Please Enter Date';
    return;
}

else if(password == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your Password';
return;
}
else if(password_confirm == ''){
document.getElementById('formvalidation').innerHTML = 'Please Enter Your confirmation password';
return;
    }
 else if(password_confirm !== password){
document.getElementById('formvalidation').innerHTML = 'Password does not match Enter correct password';
return;
    }
var objFiled = {
    userFirstName : firstName ,
    UserlastName : lastName ,
    userFullName : userName ,
    userEmailAddress : emailAddress ,
    userDate : date ,
    userPhone : phone,
    userPassword : password
};
arr.push(objFiled);

//******************localStorage ********************************

localStorage.setItem( "Registration" , JSON.stringify(arr));
sweetAlert("Done...", "Registration completed" ,"success");


// *****************empty input field *******************************

document.getElementById('firstNameId').value = '';
document.getElementById('lastNameId').value = '';
document.getElementById('userNameId').value = '';
document.getElementById('emailId').value = '';
document.getElementById('email_confirm').value = '';
document.getElementById('phone').value = '';
document.getElementById('passwordId').value = '';
document.getElementById('password_confirmation').value = '';

}
function cleartxt(){
document.getElementById('formvalidation').innerHTML = '';
}





//=====================sign In page coding ===============================


     function siginpage() {
       var registrationData = localStorage.getItem("Registration");
       var getRegistration =  JSON.parse(registrationData);

      for(var i=0; i<getRegistration.length;i++){

        var login_Email = document.getElementById('login-username').value;
        var login_pass = document.getElementById('login-password').value;

        if(getRegistration[i].userEmailAddress != login_Email || getRegistration[i].userPassword != login_pass){
            sweetAlert("Oops...", "Something went wrong!", "error");
            return;
        }
        else{
            window.location.href = ('index.html');
        }

}

     }

function  reviewdetails() {
    // document.getElementById("details").innerHTML = "HI";
    // var register = localStorage.getItem( "Registration");
    // var getregister = JSON.parse(register);

    document.getElementById("details").innerHTML = "First Name: " + document.getElementById('firstNameId').value + "<br><br>"
        + "Last Name: " +  document.getElementById('lastNameId').value + "<br><br>"
        + "Contact Number: " +  document.getElementById('phone').value + "<br><br>"
        + "Email-Id: " +  document.getElementById('emailId').value + "<br><br>"
        + "Date Of Birth: " + document.getElementById('dateId').value + "<br><br>"
        + "User Name: " +  document.getElementById('userNameId').value;

}
/// code for toggle password
const togglePassword = document.querySelector('#togglePassword');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const password = document.querySelector('#passwordId');
const password_confirmation = document.querySelector('#password_confirmation');

if (togglePassword != null) {
    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });

    toggleConfirmPassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password_confirmation.getAttribute('type') === 'password' ? 'text' : 'password';
        password_confirmation.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
}

