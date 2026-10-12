
"use strict";

/* ========================================
   1. ELEMENTS
======================================== */

const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const profileImage = document.getElementById("profile-image");
const switchImageButton = document.getElementById("switch-image-btn");

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");

/* ========================================
   2. TRANSLATIONS
======================================== */

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.interests": "Interests",
        "nav.contact": "Contact",

        "home.label": "WELCOME TO MY PORTFOLIO",
        "home.greeting": "Hi, I'm",
        "home.title": "Cybersecurity Specialist",
        "home.description": "Interested in information security, risk management, and protecting systems and GRC.",
        "home.button": "Discover More",

        "about.label": "GET TO KNOW ME",
        "about.title": "About Me",
        "about.description": "Hi, I'm Mayar! I'm passionate about Cybersecurity, with an interest in information security, risk management, and GRC. I enjoy analyzing problems, exploring new technologies, and understanding how to protect systems and data. I'm always eager to learn, develop my skills, and take on new challenges.",
        "about.contact": "Get in Touch",
        "about.cv": "Download CV",
        "about.photo": "Change Photo",

        "education.label": "MY ACADEMIC BACKGROUND",
        "education.title": "Education & Training",
        "education.description": "My academic background and practical exposure to information security and risk management.",
        "education.universityType": "UNIVERSITY EDUCATION",
        "education.degree": "Bachelor's Degree in Cybersecurity",
        "education.university": "Tafila Technical University",
        "education.country": "Jordan",
        "education.graduation": "Graduation:",
        "education.gpa": "Cumulative GPA:",
        "education.trainingType": "PRACTICAL TRAINING",
        "education.internship": "Information Security Internship",
        "education.ministry": "Ministry of Digital Economy and Entrepreneurship",
        "education.duration": "Jordan · 3 Months",
        "education.item1": "ISO 27001 and ISMS fundamentals",
        "education.item2": "Risk assessment and gap analysis",
        "education.item3": "Security policies and compliance documentation",
        "education.item4": "Internal audit and certification readiness",

        "skills.label": "WHAT I KNOW",
        "skills.title": "My Skills",
        "skills.description": "A growing set of skills and knowledge across technology and cybersecurity.",
        "skills.web": "Web Development",
        "skills.webDescription": "HTML5, CSS3, JavaScript, and responsive web design fundamentals.",
        "skills.tools": "Programming & Tools",
        "skills.toolsDescription": "Python fundamentals, Git, and GitHub for version control.",
        "skills.os": "Operating Systems",
        "skills.osDescription": "Linux fundamentals, terminal commands, and file management.",
        "skills.cyber": "Cybersecurity",
        "skills.cyberDescription": "Information security, network security fundamentals, and security awareness.",
        "skills.forensics": "Digital Forensics",
        "skills.forensicsDescription": "Familiarity with FTK Imager, Autopsy, and digital evidence analysis.",
        "skills.grc": "GRC & Compliance",
        "skills.grcDescription": "Governance, Risk and Compliance fundamentals, risk management, and ISO 27001 concepts.",

        "projects.label": "MY LEARNING JOURNEY",
        "projects.title": "Projects",
        "projects.description": "Projects completed while developing my technical knowledge and practical skills.",
        "projects.number0": "PROJECT 00",
        "projects.title0": "Linux + Git + GitHub",
        "projects.description0": "Practiced terminal navigation, file management, Git commands, version control, and GitHub workflows.",
        "projects.number1": "PROJECT 01",
        "projects.title1": "HTML Fundamentals",
        "projects.description1": "Built structured web pages using HTML5, semantic elements, forms, lists, and tables.",
        "projects.number2": "PROJECT 02",
        "projects.title2": "CSS & Visual Presentation",
        "projects.description2": "Practiced styling web pages, Flexbox layouts, responsive design, and CSS positioning.",
        "projects.number3": "PROJECT 03",
        "projects.title3": "JavaScript & Interactivity",
        "projects.description3": "Explored JavaScript fundamentals, functions, conditionals, DOM manipulation, and event handling.",
        "projects.view": "View Project ↗",

        "tag.semantics": "Semantics",
        "tag.forms": "Forms",
        "tag.responsive": "Responsive Design",

        "hobbies.label": "BEYOND TECHNOLOGY",
        "hobbies.title": "Interests & Hobbies",
        "hobbies.title0": "Exploring Technology",
        "hobbies.description0": "Discovering new technologies and learning how they work.",
        "hobbies.title1": "Continuous Learning",
        "hobbies.description1": "Developing knowledge and improving my skills step by step.",
        "hobbies.title2": "Problem Solving",
        "hobbies.description2": "Exploring challenges and finding practical ways to solve problems.",

        "contact.label": "LET'S CONNECT",
        "contact.title": "Contact Me",
        "contact.description": "Feel free to reach out or connect with me through my professional profiles.",
        "contact.name": "Your Name",
        "contact.email": "Your Email",
        "contact.message": "Your Message",
        "contact.namePlaceholder": "Enter your name",
        "contact.emailPlaceholder": "Enter your email",
        "contact.messagePlaceholder": "Write your message here",
        "contact.send": "Send Message",
        "contact.gmail": "Open Gmail",
        "contact.emailLabel": "Email",
        "contact.phoneLabel": "Phone",
        "contact.linkedinLabel": "LinkedIn",
        "contact.githubLabel": "GitHub",
        "contact.location": "Amman, Jordan",

        "footer.copyright": "© 2026 Mayar Hamdan. All rights reserved.",
        "footer.top": "Back to Top ↑",

        "theme.darkLabel": "Switch to dark theme",
        "theme.lightLabel": "Switch to light theme",

        "form.empty": "Please fill in all fields.",
        "form.success": (name) => `Thank you, ${name}! Your form was checked successfully.`,
        "form.invalidEmail": "Please enter a valid email address."
    },
    
    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "نبذة عني",
        "nav.education": "التعليم",
        "nav.skills": "المهارات",
        "nav.projects": "المشاريع",
        "nav.interests": "اهتماماتي",
        "nav.contact": "تواصل معي",

        "home.label": "أهلاً بك في معرض أعمالي",
        "home.greeting": "مرحباً، أنا",
        "home.title": "متخصصة في الأمن السيبراني",
        "home.description": "أهتم بأمن المعلومات وإدارة المخاطر وحماية الأنظمة والحوكمة والمخاطر والامتثال (GRC).",
        "home.button": "اكتشف المزيد",

        "about.label": "تعرّف عليّ",
        "about.title": "نبذة عني",
        "about.description": "مرحباً، أنا ميار! لدي شغف بالأمن السيبراني، وأهتم بأمن المعلومات وإدارة المخاطر والحوكمة والمخاطر والامتثال (GRC). أستمتع بتحليل المشكلات واستكشاف التقنيات الحديثة وفهم طرق حماية الأنظمة والبيانات. وأسعى دائماً إلى التعلم وتطوير مهاراتي وخوض تحديات جديدة.",
        "about.contact": "تواصل معي",
        "about.cv": "تحميل السيرة الذاتية",
        "about.photo": "تغيير الصورة",

        "education.label": "خلفيتي الأكاديمية",
        "education.title": "التعليم والتدريب",
        "education.description": "خلفيتي الأكاديمية وخبرتي العملية في أمن المعلومات وإدارة المخاطر.",
        "education.universityType": "التعليم الجامعي",
        "education.degree": "بكالوريوس الأمن السيبراني",
        "education.university": "جامعة الطفيلة التقنية",
        "education.country": "الأردن",
        "education.graduation": "سنة التخرج:",
        "education.gpa": "المعدل التراكمي:",
        "education.trainingType": "التدريب العملي",
        "education.internship": "تدريب في أمن المعلومات",
        "education.ministry": "وزارة الاقتصاد الرقمي والريادة",
        "education.duration": "الأردن · 3 أشهر",
        "education.item1": "أساسيات ISO 27001 ونظام إدارة أمن المعلومات (ISMS)",
        "education.item2": "تقييم المخاطر وتحليل الفجوات",
        "education.item3": "سياسات الأمن وتوثيق الامتثال",
        "education.item4": "التدقيق الداخلي والاستعداد للحصول على الشهادة",

        "skills.label": "مهاراتي ومعرفتي",
        "skills.title": "مهاراتي",
        "skills.description": "مجموعة متنامية من المهارات والمعارف في التكنولوجيا والأمن السيبراني.",
        "skills.web": "تطوير الويب",
        "skills.webDescription": "أساسيات HTML5 وCSS3 وJavaScript وتصميم مواقع متجاوبة.",
        "skills.tools": "البرمجة والأدوات",
        "skills.toolsDescription": "أساسيات Python واستخدام Git وGitHub لإدارة إصدارات المشاريع.",
        "skills.os": "أنظمة التشغيل",
        "skills.osDescription": "أساسيات Linux وأوامر الطرفية وإدارة الملفات.",
        "skills.cyber": "الأمن السيبراني",
        "skills.cyberDescription": "أمن المعلومات وأساسيات أمن الشبكات والتوعية الأمنية.",
        "skills.forensics": "التحقيق الجنائي الرقمي",
        "skills.forensicsDescription": "التعرّف على FTK Imager وAutopsy وتحليل الأدلة الرقمية.",
        "skills.grc": "الحوكمة والمخاطر والامتثال",
        "skills.grcDescription": "أساسيات الحوكمة والمخاطر والامتثال وإدارة المخاطر ومفاهيم ISO 27001.",

        "projects.label": "رحلتي التعليمية",
        "projects.title": "المشاريع",
        "projects.description": "مشاريع أنجزتها خلال تطوير معرفتي التقنية ومهاراتي العملية.",
        "projects.number0": "المشروع 00",
        "projects.title0": "Linux + Git + GitHub",
        "projects.description0": "تدرّبت على التنقل بين المجلدات وإدارة الملفات وأوامر Git والتحكم بالإصدارات واستخدام GitHub.",
        "projects.number1": "المشروع 01",
        "projects.title1": "أساسيات HTML",
        "projects.description1": "أنشأت صفحات ويب منظمة باستخدام HTML5 والعناصر الدلالية والنماذج والقوائم والجداول.",
        "projects.number2": "المشروع 02",
        "projects.title2": "CSS والتنسيق المرئي",
        "projects.description2": "تدرّبت على تنسيق صفحات الويب وتخطيطات Flexbox والتصميم المتجاوب وتحديد المواقع باستخدام CSS.",
        "projects.number3": "المشروع 03",
        "projects.title3": "JavaScript والتفاعلية",
        "projects.description3": "تعرّفت على أساسيات JavaScript والدوال والشروط والتعامل مع DOM والأحداث.",
        "projects.view": "عرض المشروع ↗",

        "tag.semantics": "العناصر الدلالية",
        "tag.forms": "النماذج",
        "tag.responsive": "التصميم المتجاوب",

        "hobbies.label": "اهتماماتي خارج التقنية",
        "hobbies.title": "الاهتمامات والهوايات",
        "hobbies.title0": "استكشاف التكنولوجيا",
        "hobbies.description0": "اكتشاف تقنيات جديدة والتعرّف على طريقة عملها.",
        "hobbies.title1": "التعلم المستمر",
        "hobbies.description1": "تطوير المعرفة وتحسين المهارات خطوة بخطوة.",
        "hobbies.title2": "حل المشكلات",
        "hobbies.description2": "استكشاف التحديات وإيجاد حلول عملية للمشكلات.",

        "contact.label": "لنبقَ على تواصل",
        "contact.title": "تواصل معي",
        "contact.description": "يمكنك التواصل معي أو زيارة حساباتي المهنية.",
        "contact.name": "الاسم",
        "contact.email": "البريد الإلكتروني",
        "contact.message": "رسالتك",
        "contact.namePlaceholder": "أدخلي اسمك",
        "contact.emailPlaceholder": "أدخلي بريدك الإلكتروني",
        "contact.messagePlaceholder": "اكتبي رسالتك هنا",
        "contact.send": "إرسال الرسالة",
        "contact.gmail": "فتح Gmail",
        "contact.emailLabel": "البريد الإلكتروني",
        "contact.phoneLabel": "رقم الهاتف",
        "contact.linkedinLabel": "لينكد إن",
        "contact.githubLabel": "جيت هب",
        "contact.location": "عمّان، الأردن",

        "footer.copyright": "© 2026 ميار حمدان. جميع الحقوق محفوظة.",
        "footer.top": "العودة إلى الأعلى ↑",

        "theme.darkLabel": "التبديل إلى الوضع الداكن",
        "theme.lightLabel": "التبديل إلى الوضع الفاتح",

        "form.empty": "يرجى تعبئة جميع الحقول.",
        "form.success": (name) => `شكراً لكِ ${name}! تم التحقق من النموذج بنجاح.`,
        "form.invalidEmail": "يرجى إدخال بريد إلكتروني صحيح."
    }
};

const textTargets = {
    "nav.home": '.nav-links a[href="#home"]',
    "nav.about": '.nav-links a[href="#about"]',
    "nav.education": '.nav-links a[href="#education"]',
    "nav.skills": '.nav-links a[href="#skills"]',
    "nav.projects": '.nav-links a[href="#projects"]',
    "nav.interests": '.nav-links a[href="#hobbies"]',
    "nav.contact": '.nav-links a[href="#contact"]',

    "home.label": "#home .section-label",
    "home.greeting": "#home h1 [data-i18n='heroGreeting']",
    "home.title": "#home h2",
    "home.description": "#home .hero-content > p:not(.section-label)",
    "home.button": '#home a[href="#about"]',

    "about.label": "#about .section-label",
    "about.title": "#about .section-heading",
    "about.description": "#about .about-content > p:not(.section-label)",
    "about.contact": '#about a[href="#contact"]',
    "about.cv": "#about a[download]",
    "about.photo": "#switch-image-btn",

    "education.label": "#education > .section-label",
    "education.title": "#education > .section-heading",
    "education.description": "#education > .section-description",
    "education.universityType": ".education-card:nth-child(1) .education-type",
    "education.degree": ".education-card:nth-child(1) h3",
    "education.university": ".education-card:nth-child(1) .education-institution",
    "education.country": ".education-card:nth-child(1) .education-location",
    "education.graduation": ".education-card:nth-child(1) .education-info p:nth-child(1) strong",
    "education.gpa": ".education-card:nth-child(1) .education-info p:nth-child(2) strong",
    "education.trainingType": ".education-card:nth-child(2) .education-type",
    "education.internship": ".education-card:nth-child(2) h3",
    "education.ministry": ".education-card:nth-child(2) .education-institution",
    "education.duration": ".education-card:nth-child(2) .education-location",
    "education.item1": ".training-list li:nth-child(1)",
    "education.item2": ".training-list li:nth-child(2)",
    "education.item3": ".training-list li:nth-child(3)",
    "education.item4": ".training-list li:nth-child(4)",

    "skills.label": "#skills > .section-label",
    "skills.title": "#skills > .section-heading",
    "skills.description": "#skills > .section-description",
    "skills.web": ".skill-card:nth-child(1) h3",
    "skills.webDescription": ".skill-card:nth-child(1) p",
    "skills.tools": ".skill-card:nth-child(2) h3",
    "skills.toolsDescription": ".skill-card:nth-child(2) p",
    "skills.os": ".skill-card:nth-child(3) h3",
    "skills.osDescription": ".skill-card:nth-child(3) p",
    "skills.cyber": ".skill-card:nth-child(4) h3",
    "skills.cyberDescription": ".skill-card:nth-child(4) p",
    "skills.forensics": ".skill-card:nth-child(5) h3",
    "skills.forensicsDescription": ".skill-card:nth-child(5) p",
    "skills.grc": ".skill-card:nth-child(6) h3",
    "skills.grcDescription": ".skill-card:nth-child(6) p",

    "projects.label": "#projects > .section-label",
    "projects.title": "#projects > .section-heading",
    "projects.description": "#projects > .section-description",
    "projects.number0": ".project-card:nth-child(1) .project-number",
    "projects.title0": ".project-card:nth-child(1) h3",
    "projects.description0": ".project-card:nth-child(1) > p",
    "projects.number1": ".project-card:nth-child(2) .project-number",
    "projects.title1": ".project-card:nth-child(2) h3",
    "projects.description1": ".project-card:nth-child(2) > p",
    "projects.number2": ".project-card:nth-child(3) .project-number",
    "projects.title2": ".project-card:nth-child(3) h3",
    "projects.description2": ".project-card:nth-child(3) > p",
    "projects.number3": ".project-card:nth-child(4) .project-number",
    "projects.title3": ".project-card:nth-child(4) h3",
    "projects.description3": ".project-card:nth-child(4) > p",

    "tag.semantics": ".project-card:nth-child(2) .project-tags span:nth-child(2)",
    "tag.forms": ".project-card:nth-child(2) .project-tags span:nth-child(3)",
    "tag.responsive": ".project-card:nth-child(3) .project-tags span:nth-child(3)",

    "hobbies.label": "#hobbies > .section-label",
    "hobbies.title": "#hobbies > .section-heading",
    "hobbies.title0": ".hobby-card:nth-child(1) h3",
    "hobbies.description0": ".hobby-card:nth-child(1) p",
    "hobbies.title1": ".hobby-card:nth-child(2) h3",
    "hobbies.description1": ".hobby-card:nth-child(2) p",
    "hobbies.title2": ".hobby-card:nth-child(3) h3",
    "hobbies.description2": ".hobby-card:nth-child(3) p",

    "contact.label": "#contact > .section-label",
    "contact.title": "#contact > .section-heading",
    "contact.description": "#contact > .section-description",
    "contact.name": 'label[for="name"]',
    "contact.email": 'label[for="email"]',
    "contact.message": 'label[for="message"]',
    "contact.send": '#contact-form button[type="submit"]',

    "contact.emailLabel": ".contact-email .contact-text",
    "contact.phoneLabel": ".contact-phone .contact-text",
    "contact.linkedinLabel": ".contact-linkedin .contact-text",
    "contact.githubLabel": ".contact-github .contact-text",
    "contact.location": ".contact-location .contact-text",

    "footer.copyright": ".footer p",
    "footer.top": '.footer a[href="#home"]'
};

function setElementText(selector, value) {
    const element = document.querySelector(selector);
    if (!element) return;

    const textElement = element.classList.contains("contact-text")
        ? element
        : element.querySelector(".contact-text");

    if (textElement) {
        textElement.textContent = value;
    } else {
        element.textContent = value;
    }
}

function setLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    Object.entries(textTargets).forEach(([key, selector]) => {
        const value = dictionary[key];

        if (typeof value === "string") {
            setElementText(selector, value);
        }
    });

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput) {
        nameInput.placeholder = dictionary["contact.namePlaceholder"];
    }

    if (emailInput) {
        emailInput.placeholder = dictionary["contact.emailPlaceholder"];
    }

    if (messageInput) {
        messageInput.placeholder = dictionary["contact.messagePlaceholder"];
    }

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.title = language === "ar"
        ? "ميار حمدان | معرض أعمال الأمن السيبراني"
        : "Mayar Hamdan | Cybersecurity Portfolio";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
        description.content = language === "ar"
            ? "معرض أعمال ميار حمدان في الأمن السيبراني والتعليم والمشاريع والمهارات التقنية."
            : "Mayar Hamdan's personal portfolio showcasing cybersecurity, education, projects, and technical skills.";
    }

    if (languageToggle) {
        languageToggle.textContent = language === "en" ? "العربية" : "English";

        languageToggle.setAttribute(
            "aria-label",
            language === "en"
                ? "Switch language to Arabic"
                : "تغيير اللغة إلى الإنجليزية"
        );
    }

    if (profileImage) {
        profileImage.alt = language === "ar"
            ? "صورة شخصية لميار حمدان"
            : "Portrait of Mayar Hamdan";
    }

    updateThemeLabel();

    if (formStatus && formStatus.dataset.statusType) {
        showFormStatus(
            formStatus.dataset.statusType,
            formStatus.dataset.submittedName || ""
        );
    }

    localStorage.setItem("portfolio-language", language);
}

/* Language button */

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        const currentLanguage =
            document.documentElement.lang === "ar" ? "ar" : "en";

        setLanguage(currentLanguage === "en" ? "ar" : "en");
    });
}

function updateThemeLabel() {
    if (!themeToggle) return;

    const isArabic = document.documentElement.lang === "ar";
    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isArabic
            ? (isDark
                ? "التبديل إلى الوضع الفاتح"
                : "التبديل إلى الوضع الداكن")
            : (isDark
                ? "Switch to light theme"
                : "Switch to dark theme")
    );
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");

    document.body.classList.toggle(
        "dark-theme",
        savedTheme === "dark"
    );

    updateThemeLabel();
}

if (themeToggle) {
    applySavedTheme();

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        localStorage.setItem(
            "portfolio-theme",
            document.body.classList.contains("dark-theme")
                ? "dark"
                : "light"
        );

        updateThemeLabel();
    });
}

function showFormStatus(type, name = "") {
    if (!formStatus) return;

    const language =
        document.documentElement.lang === "ar" ? "ar" : "en";

    const dictionary = translations[language];

    formStatus.dataset.statusType = type;

    if (type === "empty") {
        formStatus.textContent = dictionary["form.empty"];
    } else if (type === "invalidEmail") {
        formStatus.textContent = dictionary["form.invalidEmail"];
    } else if (type === "success") {
        formStatus.dataset.submittedName = name;
        formStatus.textContent = dictionary["form.success"](name);
    }
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (!nameInput || !emailInput || !messageInput) return;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            showFormStatus("empty");
            return;
        }

        if (!emailInput.checkValidity()) {
            showFormStatus("invalidEmail");
            emailInput.focus();
            return;
        }

        showFormStatus("success", name);
        contactForm.reset();
    });
}

function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 180) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});

if (profileImage && switchImageButton) {
    const images = [
        {
            src: "assets/profile-1.jpg",
            alt: "Portrait of Mayar Hamdan"
        },
        {
            src: "assets/profile-2.jpg",
            alt: "Alternate portrait of Mayar Hamdan"
        }
    ];

    let currentImageIndex = 0;
    let isChangingImage = false;

    images.forEach((image) => {
        const preloadImage = new Image();
        preloadImage.src = image.src;
    });

    switchImageButton.addEventListener("click", () => {
        if (isChangingImage) return;

        isChangingImage = true;

        const nextImageIndex =
            (currentImageIndex + 1) % images.length;

        profileImage.classList.add("fade-out");

        setTimeout(() => {
            profileImage.src = images[nextImageIndex].src;
            currentImageIndex = nextImageIndex;

            profileImage.alt =
                document.documentElement.lang === "ar"
                    ? "صورة شخصية لميار حمدان"
                    : images[nextImageIndex].alt;

            profileImage.classList.remove("fade-out");

            setTimeout(() => {
                isChangingImage = false;
            }, 300);
        }, 300);
    });
}

const savedLanguage = localStorage.getItem("portfolio-language");

setLanguage(savedLanguage === "ar" ? "ar" : "en");
updateActiveLink();