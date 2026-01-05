
const users = [];
let action = "";
// mahd dakchi li wst while (true) radi tb9a while khdama
while (true) {
    // 1
    action = prompt("What do you want to do? 'signup', 'login', 'change password', or 'exit' ");
    if (action === "exit") break;
    else if (action === "signup") {
        signup();
    }
    else if (action === "login") {
        login();
    }
    else if (action === "change password") {
        change_password();
    }
    else {
        alert("dkhl chi haja s7i7a");
    }
}

// 2
// ila ktb signup
function signup() {
    let name;
    //   mahd dakchi li wst while true radi tb9 khdama 
    while (true) {
        // trim:kathayd espace li jnab
        name = prompt("dkhl fullName");
        // 
        if (name.length < 5) {
            alert("name khaso ykoun kbir mn 5 caracter");
            continue;
        }
        // ILA MAKANCH FIH horof radi maradich ykml / test:katisti lk dakchi li kayn ldakhl li wst name
        if (!/^[a-zA-Z ]+$/.test(name)) {
            alert("name ma fihch'a-zA-Z'")
            continue;
        }
        // kayrj3 ga3 lhorof sghar o kayrj3 awl harf kbir 
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
            alert("email khaso ykoun fih ghir @ wahed")
            continue;
        }
        if (users.find(u => u.email === email)) {
            alert("email deja kayn")
            continue
        }
        break;
    }
    let age;
    while (true) {
        age = Number(prompt("ch7al f 3omrk"));
        if (isNaN(age) || age < 3) {
            alert("dkhl age s7i7");
            continue;
        }
        break;
    }

    let password;
    while (true) {
        password = prompt("dkhl password");
        if (password.includes(" ")) {
            alert("Password ma fihch space")
            continue;
        }
        if (password.length < 7) {
            alert("Password khaso >= 7 lettres")
            continue;
        }
        if (!/[@#\-\+\*\/]/.test(password)) {
            alert("Password khaso ykoun fih character mn hado: [@, #, -, +, *, /].")
            continue;
            break;
        }
        let I3ADApASS = prompt("3awd dkhl password ola ghadi tbloka")
        if (I3ADApASS !== password) {
            alert("password machi bhal bhal");
            continue;
        }
        break;
    }
    users.push({
        name,
        email,
        password,
        age,
        balance: 0,
        history: []
    }
    )

    alert("signup nadiii");
    console.log(users);

}

// action = prompt("What do you want to do? 'signup', 'login', 'change password', or 'exit' ");
//
function login() {
    let email = prompt("dkhl email dylk");
    let password = prompt("dkhl password dylk");

    let user = users.find(
        u => u.email === email && u.password === password);

    if (!user) {
        alert("email ola password ghalt");
        return;
    }

    alert("welcome " + user.name);
}


// 3
function change_password() {

    let email = prompt("ktb email dylk:");

    let user = users.find(dswwsdw => dswwsdw.email === email);

    if (!user) {
        alert("email dylk machi shih");
    }
    else {
        let newPassword = prompt("ktb password dylk:");
        user.password = newPassword;
        alert("Password li bdlti daz");
    }
    
}
// else{
//     alert("3awd mra khra");
// }

