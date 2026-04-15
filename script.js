// وظائف الوصول (Accessibility)
function toggleDark() { document.body.classList.toggle("dark"); }
function toggleContrast() { document.body.classList.toggle("high-contrast"); }
function increaseText() { document.body.classList.toggle("large-text"); }

function speak() {
    window.speechSynthesis.cancel();
    const text = document.getElementById('mainContent').innerText;
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ar-SA';
    msg.rate = 0.9; // سرعة هادئة ومفهومة
    window.speechSynthesis.speak(msg);
}

// وظائف تسجيل الدخول المحسنة
let lastFocusedElement;

function openLogin() { 
    lastFocusedElement = document.activeElement; // حفظ آخر عنصر كان عليه التركيز
    const modal = document.getElementById("loginModal");
    modal.style.display = "flex"; 
    setTimeout(() => {
        modal.style.opacity = "1";
        document.getElementById('loginEmail').focus(); // نقل التركيز لداخل النافذة
    }, 10);
}

function closeLogin() { 
    const modal = document.getElementById("loginModal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
        if (lastFocusedElement) lastFocusedElement.focus(); // إعادة التركيز للزر اللي فتح النافذة
    }, 400);
}

// دعم زر Escape للإغلاق
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLogin();
});

window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) { closeLogin(); }
}

// فلترة الخدمات (تصحيح عرض الـ Flex)
function filterServices() {
    let input = document.getElementById('serviceSearch').value.toLowerCase();
    let services = document.getElementsByClassName('service-item');
    for (let service of services) {
        let text = service.innerText.toLowerCase();
        // استخدام "" يرجع الـ Display للحالة الأصلية في الـ CSS
        service.style.display = text.includes(input) ? "" : "none";
    }
}

// معالجة النماذج
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
    closeLogin();
}

// حركة الظهور عند التمرير
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      el.classList.add('animate-in');
    }
  })
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // تشغيل أولي
