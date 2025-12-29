
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
  } else {
    alert("dkhl chi haja s7i7a");
  }
}

if (action === 'signup') {
  let name;
  while (true) {
    name = prompt("dkhl fullName").trim();
    if (name.length < 5) { 
alert("name khaso ykoun kbir mn 5 caracter");
 continue; }
    if (!/^[a-zA-Z ]+$/.test(name)){
             alert("name ma fihch'a-zA-Z'")
             continue;
             }
    name = name.toLowerCase().replace(/(^|\s)\S/g, match => match.toUpperCase());
    break;
  }

  let email;
  while (true) {
    email = prompt("dkhl email").trim().toLowerCase();
    if (email.includes(" ")) { 
        alert("email ma fihch ipace")
         continue;
     }
    if (email.length < 10) {
         alert("email khaso ykoun >= 10 caractères")

         continue;
         }
    if (!email.includes("@") || email.indexOf("@") !== email.lastIndexOf("@")) { 
        alert("email khaso ykoun fih @ wahed ghir")
        continue; 
    }
    if (users.find(u => u.email === email)) {
         alert("email deja kayn")
         continue 
        }
    break;
  }

  let password;
  while (true) {
    password = prompt("dkhl password");
    if (password.includes(" ")) 
{ 
alert("Password ma fihch spaces")
continue;
 }
    if (password.length < 7) { 
        alert("Password khaso >= 7 lettres")
        continue;
     }
    if (!/[@#\-\+\*\/]/.test(password))  { alert("Password khaso ykoun fih character spisial")
         continue;
         }
    break;
  }
  users.push({ name, 
    email, 
    password,
   balance:0,
    history:[]  
}
);
  alert("signup success!");

  console.log(users);
}

