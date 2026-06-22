// =========================
// CUSTOMER PROFILE
// =========================

function createProfile(){

let name=document.getElementById("cname").value;
let cid=document.getElementById("cid").value;
let acc=document.getElementById("acc").value;
let mobile=document.getElementById("mobile").value;
let email=document.getElementById("email").value;

if(name=="" || cid=="" || acc==""){

alert("Please fill all details");

return;

}

localStorage.setItem("name",name);
localStorage.setItem("cid",cid);
localStorage.setItem("acc",acc);
localStorage.setItem("mobile",mobile);
localStorage.setItem("email",email);

document.getElementById("customerData").innerHTML=`

<div class="profile-card">

<h3>Customer Profile</h3>

<p><b>Name:</b> ${name}</p>

<p><b>Customer ID:</b> ${cid}</p>

<p><b>Account Number:</b> ${acc}</p>

<p><b>Mobile:</b> ${mobile}</p>

<p><b>Email:</b> ${email}</p>

<p><b>KYC Status:</b> Verified ✅</p>

</div>

`;

}

// =========================
// AI BANKING ASSISTANT
// =========================

function chatBot(){

let msg=document.getElementById("userInput")
.value.toLowerCase();

let reply="";

if(msg.includes("loan"))
reply="You can apply for Home, Education and Personal Loans through SBI.";

else if(msg.includes("upi"))
reply="Open SBI YONO → UPI Services → Activate UPI.";

else if(msg.includes("account"))
reply="Visit nearest SBI branch with Aadhaar and PAN card.";

else if(msg.includes("credit"))
reply="SBI provides multiple credit card options.";

else if(msg.includes("balance"))
reply="Available balance is ₹50,000.";

else
reply="Welcome to SBI AI Assistant. Ask me anything about banking.";

document.getElementById("response")
.innerHTML=reply;

speak(reply);

}

// =========================
// TEXT TO SPEECH
// =========================

function speak(text){

let speech=
new SpeechSynthesisUtterance(text);

speech.lang="en-IN";

window.speechSynthesis.speak(speech);

}

// =========================
// VOICE ASSISTANT
// =========================

function startVoice(){

const SpeechRecognition=
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(!SpeechRecognition){

alert("Voice Recognition Not Supported");

return;

}

const recognition=
new SpeechRecognition();

recognition.lang="en-IN";

recognition.start();

recognition.onresult=function(event){

let transcript=
event.results[0][0].transcript;

document.getElementById("userInput")
.value=transcript;

chatBot();

};

}

// =========================
// FRAUD DETECTION
// =========================

function checkFraud(){

let amount=
Math.floor(Math.random()*150000);

let result="";

if(amount>100000){

result=
"🚨 HIGH RISK TRANSACTION DETECTED<br>Amount: ₹"+amount;

}

else if(amount>50000){

result=
"⚠ Suspicious Transaction<br>Amount: ₹"+amount;

}

else{

result=
"✅ Safe Transaction<br>Amount: ₹"+amount;

}

document.getElementById("fraudResult")
.innerHTML=result;

}

// =========================
// SCAM DETECTION
// =========================

function detectScam(){

let text=
document.getElementById("scamText")
.value.toLowerCase();

let output="";

if(
text.includes("otp") ||
text.includes("click") ||
text.includes("urgent") ||
text.includes("account blocked")
){

output=
"🚨 Scam Probability : 95%";

}

else{

output=
"✅ Message Looks Safe";

}

document.getElementById("scamResult")
.innerHTML=output;

}

// =========================
// FINANCIAL COACH
// =========================

function calculateSavings(){

let salary=
parseFloat(
document.getElementById("salary").value
);

let expense=
parseFloat(
document.getElementById("expense").value
);

if(isNaN(salary) || isNaN(expense)){

document.getElementById("savingResult")
.innerHTML="Enter valid values";

return;

}

let savings=
salary-expense;

let advice="";

if(savings>10000)
advice="Excellent Saving Habit 🎉";

else if(savings>5000)
advice="Good Savings 👍";

else
advice="Try reducing expenses 📉";

document.getElementById("savingResult")
.innerHTML=
"Monthly Savings : ₹"+
savings+
"<br>"+advice;

}

// =========================
// LOAN ELIGIBILITY
// =========================

function checkLoan(){

let income=
parseFloat(
document.getElementById("income").value
);

let age=
parseFloat(
document.getElementById("age").value
);

if(isNaN(income) || isNaN(age)){

document.getElementById("loanResult")
.innerHTML="Enter valid details";

return;

}

if(age>=21 && income>=25000){

let loan=
income*60;

document.getElementById("loanResult")
.innerHTML=
"✅ Eligible<br>Estimated Loan Amount: ₹"+
loan;

}

else{

document.getElementById("loanResult")
.innerHTML=
"❌ Not Eligible";

}

}

// =========================
// FINANCIAL HEALTH SCORE
// =========================

function updateHealthScore(){

let score=
Math.floor(Math.random()*20)+80;

let element=
document.getElementById("healthScore");

if(element){

element.innerHTML=
score+"/100";

}

}

setInterval(updateHealthScore,5000);

// =========================
// EMERGENCY BANKING
// =========================

document.addEventListener("DOMContentLoaded",()=>{

let buttons=
document.querySelectorAll(".emergency button");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert(
btn.innerText+
" Request Submitted Successfully"
);

});

});

});

// =========================
// CHART DASHBOARD
// =========================

window.onload=function(){

let chart=
document.getElementById("financeChart");

if(chart){

new Chart(chart,{

type:"bar",

data:{

labels:[
"Food",
"Travel",
"Shopping",
"Savings"
],

datasets:[{

label:"Monthly Spending",

data:[
5000,
3000,
4500,
12000
]

}]

},

options:{

responsive:true

}

});

}

};

// =========================
// SAFETY TIPS
// =========================

const tips=[

"Never share OTP.",

"Verify UPI requests before paying.",

"Use strong passwords.",

"Enable SMS alerts.",

"Avoid suspicious links."

];

setInterval(()=>{

console.log(

tips[
Math.floor(
Math.random()*tips.length
)
]

);

},7000);

