// faq-item və timeline-point seçimi
const faqItems = document.querySelectorAll('.faq-item');
const timelinePoints = document.querySelectorAll('.timeline-point');

// Click hadisəsi: hər klikdə yalnız bir faq active olur və uyğun timeline point aktivləşir
faqItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // hamısını təmizləyirik
    faqItems.forEach(i => i.classList.remove('active'));
    timelinePoints.forEach(p => p.classList.remove('active'));

    if (!isActive) {
      // əgər kliklənən əvvəlcə bağlı idisə, aç və uyğun timeline point-i aktiv et
      item.classList.add('active');
      if (timelinePoints[index]) timelinePoints[index].classList.add('active');
    }
    // əgər isActive idisə, yuxarıda hamısını təmizləmişik (yəni heç biri açıq qalmır)
  });
});

// Temp database for login
const users = [
  { login: "admin", password: "admin" }
];

const popupLogin = document.querySelector("#popupLogin");
let loginInput = document.querySelector("#login")?.value.trim("");
let passwordInput = document.querySelector("#password")?.value.trim("");

const btnLoginForwardUI = document.querySelector("#btnLoginForwardUI");
//Login popup open
btnLoginForwardUI.addEventListener("click", ForwardUI);
function ForwardUI() {
  popupLogin.classList.toggle("active");
  document.body.style.overflow = "hidden";
  clearInputs()
}
//Login popup close
const btnClose = document.querySelector("#btnClose");
btnClose.addEventListener("click", CloseLoginUI);
function CloseLoginUI() {
  popupLogin.classList.remove("active");
  document.body.style.overflow = "auto";
  clearInputs()
}

const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", CheckLogin);
function CheckLogin() {
  loginInput = document.querySelector("#login")?.value.trim("");
  passwordInput = document.querySelector("#password")?.value.trim("");
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.login == loginInput && user.password == passwordInput) {
      CloseLoginUI();
      clearInputs()
    }
  }
}

function clearInputs(){
  loginInput = document.querySelector("#login");
  passwordInput = document.querySelector("#password");
  loginInput.value = "";
  passwordInput.value = ""; 
}

console.log([btnLogin]);



// document.body.style.overflow = "hidden";  
