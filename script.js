// وظيفة تبديل الوضع الليلي
function toggleDark() {
    document.body.classList.toggle("dark");
}

// وظيفة التباين العالي
function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}

// وظيفة تكبير الخط
function increaseText() {
    document.body.classList.toggle("large-text");
}

// وظيفة القراءة الصوتية
function speak() {
    // إلغاء أي قراءة حالية لتجنب تداخل الأصوات
    window.speechSynthesis.cancel();

    // اختيار النص داخل الحاوية الرئيسية فقط
    const mainText = document.querySelector('main').innerText;
    
    const utterance = new SpeechSynthesisUtterance(mainText);
    utterance.lang = 'ar-SA'; // لغة عربية
    utterance.rate = 0.9;     // سرعة هادئة
    
    window.speechSynthesis.speak(utterance);
}
