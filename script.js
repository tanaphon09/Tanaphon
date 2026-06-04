// แสดงปีปัจจุบันอัตโนมัติ
document.getElementById("year").textContent =
    new Date().getFullYear();

// เอฟเฟกต์เมื่อเลื่อนหน้าเว็บ
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// กำหนดค่าเริ่มต้น
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease";
});
