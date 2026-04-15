// وظائف الوصول
function toggleDark() { document.body.classList.toggle("dark"); }
function toggleContrast() { document.body.classList.toggle("high-contrast"); }
function increaseText() { document.body.classList.toggle("large-text"); }

function speak() {
    window.speechSynthesis.cancel();
    const text = document.getElementById('mainContent').innerText;
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ar-SA';
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
}

// إدارة الـ Modal و الـ Focus
let lastFocusedElement;

function openLogin() { 
    lastFocusedElement = document.activeElement;
    const modal = document.getElementById("loginModal");
    modal.style.display = "flex"; 
    setTimeout(() => {
        modal.style.opacity = "1";
        document.getElementById('loginEmail').focus();
    }, 10);
}

function closeLogin() { 
    const modal = document.getElementById("loginModal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
        if (lastFocusedElement) lastFocusedElement.focus();
    }, 400);
}

// إظهار وإخفاء كلمة المرور
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.getElementById('loginPass');
    const eyeIcon = document.getElementById('eyeIcon');

    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            eyeIcon.classList.toggle('fa-eye');
            eyeIcon.classList.toggle('fa-eye-slash');
        });
    }
});

// فلترة الخدمات
function filterServices() {
    let input = document.getElementById('serviceSearch').value.toLowerCase();
    let services = document.getElementsByClassName('service-item');
    for (let service of services) {
        service.style.display = service.innerText.toLowerCase().includes(input) ? "" : "none";
    }
}

// معالجة تسجيل الدخول
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const errorDiv = document.getElementById('loginError');
    // محاكاة خطأ بسيط
    errorDiv.textContent = "يجب التأكد من البيانات أولاً (عرض تجريبي)";
    errorDiv.style.display = "block";
}

// دعم زر Esc
window.addEventListener('keydown', (e) => { if (e.key === "Escape") closeLogin(); });
