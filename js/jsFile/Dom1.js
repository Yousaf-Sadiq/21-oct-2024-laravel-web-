// NODE TREE
//  render

/**
 method 1
 fetch data through multi-dimensional form array 
 */

let form = document.forms["abc"];

//  event listner
form.addEventListener("submit", function (e) {
  e.preventDefault();

  e.stopPropagation();
  console.log("ok");

  let Email = form["email"];
  let pswd = form["pswd"];

  let e_value = Email.value;
  let p_value = pswd.value;

  let value = [e_value, p_value];

  let customMSg = ["EMAIL IS REQUIRED", "PASSWORD IS REQUIRED"];

  let status = ErrorCheck(value, customMSg);

  //   console.log(status);

  if (status.error > 0) {
    let msg = status.msg;

    for (let j = 0; j < msg.length; j++) {
      alert(msg[j]);
    }

    return false;
  } else {


    console.log(e_value,p_value);

  }
});

function ErrorCheck(a, mseg) {
  let status = {
    error: 0,
    msg: [],
  };

  for (let i = 0; i < a.length; i++) {
    if (a[i] == "" || a[i] == undefined || a[i] == null) {
      status.error++;
      status.msg.push(mseg[i]);
    }
  }

  return status;
}
