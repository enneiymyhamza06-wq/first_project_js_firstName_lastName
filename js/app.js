
const users = [];
let action = "";

while (true) {
  action = prompt("What do you want to do? 'signup', 'login', 'change password', or 'exit' ");

  if (action === 'exit') {
    alert("bye");
    break;
  }

  if (action === 'signup' || action === 'login' || action === 'change password') {
    break;
  } 
  else{
    alert("dkhl chi haja s7i7a");
  }
}

if (action === 'signup') {
  let name = prompt("dkhl fullnnName");
  name = name.trim().toLowerCase() + name.slice(1,1)
  name = name.replace(/(^|\s)\S/g, match => match.toUpperCase());
  let y = true
  while (true) {
   
         let name = prompt("3awd dkhl fullName");
         if (name == "/^[a-zA-Z_]+$/") {
             let name = prompt("3awd");
         }
        if (name.length > 5) {
            false
            break
        }
  }

  let email = prompt("dkhl email").trim().toLowerCase();
if (email == email.includes(" ")) {
    email = prompt("dkhl email 3awtani").trim().toLowerCase()
}
if (email.length < 10 ) {
    alert("email dylk na9s 9al mn 10 caracter")
  }

  let password = prompt("dkhl password")
  
  users.push({
    name: name,
    email: email,
    password: password,
    balance: 0,
    history: []
  })
  alert("signup success!");
  console.log(users);
}
