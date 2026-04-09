// وظائف الوصول
function toggleDark() { document.body.classList.toggle("dark"); }
function toggleContrast() { document.body.classList.toggle("high-contrast"); }
function increaseText() { document.body.classList.toggle("large-text"); }

function speak() {
    window.speechSynthesis.cancel();
    const text = document.querySelector('main').innerText;
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ar-SA';
    window.speechSynthesis.speak(msg);
}

// وظائف تسجيل الدخول
function openLogin() { document.getElementById("loginModal").style.display = "block"; }
function closeLogin() { document.getElementById("loginModal").style.display = "none"; }

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) { closeLogin(); }
}

// فلترة الخدمات بالبحث
function filterServices() {
    let input = document.getElementById('serviceSearch').value.toLowerCase();
    let services = document.getElementsByClassName('service-item');
    for (let service of services) {
        let text = service.innerText.toLowerCase();
        service.style.display = text.includes(input) ? "block" : "none";
    }
}

// معالجة النماذج
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
    closeLogin();
}

document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    alert("شكراً لتواصلك معنا، سنرد عليك قريباً.");
    this.reset();
}
