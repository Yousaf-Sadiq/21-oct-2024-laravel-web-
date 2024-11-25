/**
 
method 1 to access form manipulation by using DOM 
 */

let form = document.forms["Myform"];

form.addEventListener("submit", function (q) {
  q.preventDefault();
  q.stopPropagation();

  console.log("ok");

  let Email = form["email"];
  let pswd = form["pswd"];
  let userName = form["userName"];

  let e_value = Email.value;
  let p_value = pswd.value;
  let u_value = userName.value;

  //            0        1
  let data = [e_value, p_value,u_value];

  let msg = ["Email is Required", "Password is required","User Name is Required"];


  
  let a = ErrorChk(data, msg);

  if (a.error > 0) {


    let mesg= a.msg

    mesg.forEach(function (e) {
        
        console.log(e);
    })

  }
});

function ErrorChk(errorValue, message) {
  let status = {
    error: 0,
    msg: [],
  };

  for (let i = 0; i < errorValue.length; i++) {
    if (
      errorValue[i] == "" ||
      errorValue[i] == undefined ||
      errorValue[i] == null
    ) {
      status.error++;
      status.msg.push(message[i]);
    }
  }

  return status;
}
