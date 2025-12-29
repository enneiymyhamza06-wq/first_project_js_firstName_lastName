// تنظيم المشروع
// خاصك دير فولدر سميتو:
// first_project_js_firstName_lastName

// وتدير Repository فـ GitHub بنفس الاسم.
// الخدمة فردية، والحد الأدنى هو 10 commits، يعني ما تجمعش الخدمة كاملة فـ commit واحد، قسمها مراحل.

// الفكرة العامة ديال البرنامج
// البرنامج كيبدا بسؤال المستخدم شنو باغي يدير:

// sign up

// login

// change password

// exit
const users = {
    "user1" : {
        name : "hamza",
        email: "enneiymyhamza03@gmail.com",
        age : 21,
        password : "hamzawacc2",
        balance :999,

    }
}
let action = ""

while (true) {
    let action = prompt("What do you want to do? 'sign up', 'login', 'change password', or 'exit'");

    if (action === 'exit') {
        alert("bye");
        break;
    }

    if(action === 'sign up' || action === 'login' || action === 'change password' ){
        alert("sf nadi");
        break
    } else {
        alert("dkhl chi haja s7i7a");
    }
}

if (action === 'login') {
    let nameSingUp = prompt("dkhl firsName AND lastName")
    nameSingUp = nameSingUp.trim()
    nameSingUp = nameSingUp.charAt(0).toUpperCase() + nameSingUp.slice(1,1)
    let uppercasetext = nameSingUp.replace(/(^|\s)\S/g, match => match.toUpperCase());
    console.log(uppercasetext);

}


// إلى كتب المستخدم "exit"، كيخرج من العملية الحالية ويرجع لنفس السؤال من جديد.
// المعطيات ديال المستخدمين كتتخزن فـ array، وكل مستخدم كيمثل بـ object.

// كل user خاصو يكون فيه على الأقل:

// name

// email

// age

// password

// balance

// history

// loan

// investment

// التسجيل (Sign Up)

// الاسم الكامل (Full Name):

// خاص ما يكونش فيه space فالأول ولا فالآخر

// كل كلمة خاص الحرف الأول يكون كبير والباقي صغار

// ما يكونش فيه أرقام ولا رموز بحال @ أو #

// إلا كان فيه أقل من 5 حروف (بلا spaces) ما يتسجلش

// الإيميل:

// نحيدو spaces من الأول والآخر

// نحولو كامل لـ lowercase

// ما يكونش فيه spaces فالوسط

// خاص يكون فيه غير @ وحدة

// الطول ديالو يكون على الأقل 10 حروف

// ما يكونش مكرر فالداتا

// العمر (Age):

// غير أرقام

// بلا spaces

// الطول يكون رقم واحد أو جوج أرقام

// إلا كان فارغ أو فيه 3 أرقام ما يتسجلش

// الباسورد:

// بلا spaces فالأول ولا فالآخر

// بلا spaces فالوسط

// خاص يكون فيه على الأقل رمز واحد من:
// @ # - + * /

// الطول يكون على الأقل 7 حروف

// تأكيد الباسورد:

// المستخدم خاصو يعاود يكتب نفس الباسورد بالضبط

// إلا غلط، التسجيل كيتحبس

// تسجيل الدخول (Login)
// المستخدم كيدخل:

// الإيميل: خاص يكون موجود فالداتا

// الباسورد: خاص يطابق داك الإيميل

// إلى شي واحد فيهم غلط، الدخول ما كيتمش.

// تغيير الباسورد
// المستخدم كيدخل الإيميل ديالو.
// إلى كان موجود، يقدر يبدل الباسورد بنفس الشروط السابقة.
// إلى ما كانش، كيتعطى error.

// منين المستخدم يدخل للحساب
// كيبان ليه الرصيد ديالو (balance)، ومن بعد كيتعطاو ليه الاختيارات التالية:

// Logout:
// إلى اختارها، كيخرج ويرجع لأول منيو (sign up / login / change password).

// Withdraw Money:
// المستخدم كيدخل مبلغ.
// ما خاصوش يفوت الرصيد الموجود.
// إلى العملية دازت، المبلغ كيتنقص ويتسجل فـ history.

// Deposit Money:
// المستخدم كيدخل مبلغ.
// ما خاصوش يفوت 1000 درهم.
// المبلغ كيتزاد ويتسجل فـ history.

// Take a Loan:
// المستخدم يقدر ياخذ قرض حتى 20% من الرصيد ديالو.
// كيشد 20% زيادة مباشرة.
// ومن بعد كل login كيتنقص 10% حتى يتسد القرض كامل.

// Invest:
// المستخدم يختار مبلغ للاستثمار.
// كل login كيربح 20%.
// الربح كيبقى حتى يوصل المجموع لـ 120% من المبلغ الأصلي، ومن بعد كيحبس.

// History:
// المستخدم يقدر يشوف جميع العمليات لي دارت فالحساب ديالو (إيداع، سحب، قرض، استثمار، تسجيل دخول).