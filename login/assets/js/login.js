// alert("Yeah it is working, GREAT!")


// This function 'validation' below will be added in FORM tag on HTML

function validation() {
    const email = document.loginpage.email_input.value;
    const password = document.loginpage.pass_input.value;

    if (email.endsWith('@dci-student.org') && password.length >= 8) {
          return true;
        } else {
          alert("Email or Password doesn't meet requirements")
          return false;
        }
 
}

// ------------code ends here------------------------

// This function 'showPass' below will be added in 'input' checkbox

function showPass() {
  var x = document.getElementById("pass_input");
  if (x.type === "password") { 
    x.type = "text";
  } else {
    x.type = "password";
  }

}

// --------------code ends here----------------------

// To disable/enable signin button when input filled out

function disenableSignin() {
  const email = document.loginpage.email_input.value;
  const password = document.loginpage.pass_input.value;
  const signinBtn = document.getElementById('sgn-in-btn')

    if (email.length > 0 && password.length > 0) {
    // remove signin disable class from sign in button
      signinBtn.classList.remove("signin-disabled");
    } else {
    // add signin disable class if it doesn't exist
      signinBtn.classList.add("signin-disabled");
    }
}

// -----------------code ends here-------------------