let dt = [
  {
    a: 'admin@gmail.com',
    b: 'AdminPass'
  },
  {
    a: 'user@gmail.com',
    b: 'UserPass'
  }
]
let limit = 5;
let mail = prompt('Please enter your email', '');
let pass;
let newpass
let changePass;

if (mail === '' || mail === null) {
  alert('Canceled');
} else {
  switch (true) {
    case mail.length < limit:
      alert("I don't know any emails having name length less than 5 symbols");
      break;
    case mail === dt[0].a || mail === dt[1].a:
      pass = prompt('Please enter your password', '');
      if(pass === '' || pass === null) {
        alert('Canceled');
      } else {
        switch (true) {
          case mail === dt[0].a && pass === dt[0].b || mail === dt[1].a && pass === dt[1].b:
            changePass = confirm('Do you want to change your password?');
            if (changePass) {
              pass = prompt('Write your old password', '');
              if(pass === '' || pass === null) {
                alert('Canceled');
              } else {
                switch (true) {
                  case mail === dt[0].a && pass !== dt[0].b:
                    alert('Wrong password');
                    break;
                  case mail === dt[1].a && pass !== dt[1].b:
                    alert('Wrong password');
                    break;
                  default:
                    if (pass === '' || pass === null) {
                      alert('Canceled');
                    } else {
                      pass = prompt('Write your new password', '');
                      if (pass === '' || pass === null) {
                        alert('Canceled');
                      } 
                      if (pass.length < limit + 1) {
                        alert('It’s too short password. Sorry.');
                      } else {
                          newpass = prompt('Write your new password again', '');
                          if (newpass !== pass) {
                            alert('You wrote the wrong password')
                          } else {
                            alert('You have successfully changed your password')
                          }
                        }
                      }
                    break;
                }
              }
            } else {
              alert('You have failed the change')
            }
            break;
          default:
            alert('Wrong password');
            break;
        }
      }
      break;
    default:
      alert("I don't know you");
      break;
  }
}