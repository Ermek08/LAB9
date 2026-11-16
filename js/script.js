// Growing Landing — Лабораторные работы №8 и №9

const developer = {
    name: "Эрмек",
    position: "JavaScript Developer",
    age: 20,
    projectCount: 6,
    monthsLearning: 10,
    isAvailable: true,
    contacts: {
        email: "ermek.dev@example.com",
        phone: "+996700123456",
        city: "Бишкек"
    }
};

document.querySelector("#developer-name").textContent = "Привет! Я " + developer.name + " 👋";
document.querySelector("#developer-position").textContent = developer.position;
document.querySelector("#developer-city").textContent = "Город: " + developer.contacts.city;
document.querySelector("#developer-email").textContent = "Email: " + developer.contacts.email;
document.querySelector("#stat-projects").textContent = developer.projectCount;
document.querySelector("#stat-experience").textContent = developer.monthsLearning;

const availabilityEl = document.querySelector("#developer-availability");
if (developer.isAvailable === true) {
    availabilityEl.textContent = "Открыт к новым проектам";
} else {
    availabilityEl.textContent = "Сейчас не принимаю проекты";
}


// Задание 2. Массив developer.skills
developer.skills = ["HTML", "CSS", "JavaScript", "Git", "Figma"];
console.log("=== Задание 2: Массив навыков ===");
console.log(developer.skills);

// Задание 3. Индексы массива
console.log("=== Задание 3: Индексы ===");
console.log("Первый навык:", developer.skills[0]);
console.log("Третий навык:", developer.skills[2]);
console.log("Последний навык:", developer.skills[developer.skills.length - 1]);

// Задание 4. Изменяем элемент
console.log("=== Задание 4: Замена элемента ===");
const oldSkill = developer.skills[2];
developer.skills[2] = "TypeScript";
console.log("Старое значение:", oldSkill);
console.log("Новое значение:", developer.skills[2]);
// Возвращаем "JavaScript" для дальнейших заданий
developer.skills[2] = "JavaScript";

// Задание 5. length и статистика
const skillsCountEl = document.querySelector("#skills-count");
skillsCountEl.textContent = developer.skills.length;


// =========================================================
// ЧАСТЬ II. Методы и циклы
// =========================================================

// Задание 6. Метод push()
console.log("=== Задание 6: Метод push() ===");
const newLength = developer.skills.push("React");
console.log("Новая длина массива:", newLength);
console.log("Добавленный элемент:", developer.skills[developer.skills.length - 1]);

// Задание 7. Метод pop()
console.log("=== Задание 7: Метод pop() ===");
const removedSkill = developer.skills.pop();
console.log("Удалённый навык (removedSkill):", removedSkill);
skillsCountEl.textContent = developer.skills.length; 

// Задание 8. Цикл for
console.log("=== Задание 8: Цикл for ===");
for (let i = 0; i < developer.skills.length; i++) {
    console.log(`Индекс ${i}: ${developer.skills[i]}`);
}

// Задание 9. while и for...of
console.log("=== Задание 9: Цикл while ===");
let idx = 0;
while (idx < developer.skills.length) {
    console.log("while:", developer.skills[idx]);
    idx++;
}

console.log("=== Задание 9: Цикл for...of ===");
for (const skill of developer.skills) {
    console.log("for...of:", skill);
}

// Задание 10. Вывод навыков в DOM
const skillsContainer = document.querySelector("#skills-list");
for (let i = 0; i < developer.skills.length; i++) {
    const skillBadge = document.createElement("span");
    skillBadge.classList.add("skill-badge");
    skillBadge.textContent = developer.skills[i];
    skillsContainer.appendChild(skillBadge);
}


// =========================================================
// ЧАСТЬ III и IV. Массив объектов, карточки и расширение
// =========================================================

// Задание 11. Массив developer.services
developer.services = [
    {
        icon: "◈",
        title: "Лендинги",
        description: "Современные одностраничные сайты с понятной структурой."
    },
    {
        icon: "▦",
        title: "Адаптивная вёрстка",
        description: "Аккуратные интерфейсы для телефона, планшета и компьютера."
    },
    {
        icon: "⌘",
        title: "Интерактивность",
        description: "Кнопки, формы и динамические элементы — скоро на JavaScript."
    }
];

console.log("=== Задание 11: Услуги ===");
console.log("Первая услуга:", developer.services[0].title);
console.log("Количество услуг до push:", developer.services.length);

// Задание 14. Четвёртая карточка через push() (вызываем ДО цикла генерации!)
developer.services.push({
    icon: "⚙",
    title: "Веб-приложения",
    description: "Разработка интерактивных веб-приложений."
});
console.log("Количество услуг после push:", developer.services.length);

// Задание 13. Создание карточек циклом for
const servicesContainer = document.querySelector("#services-list");

for (let i = 0; i < developer.services.length; i++) {
    const service = developer.services[i];

    const card = document.createElement("article");
    card.classList.add("service-card");

    const iconEl = document.createElement("span");
    iconEl.classList.add("service-icon");
    iconEl.textContent = service.icon;

    const numberEl = document.createElement("span");
    numberEl.classList.add("card-number");
    numberEl.textContent = String(i + 1).padStart(2, "0");

    const titleEl = document.createElement("h3");
    titleEl.textContent = service.title;

    const descEl = document.createElement("p");
    descEl.textContent = service.description;

    const arrowEl = document.createElement("span");
    arrowEl.classList.add("card-arrow");
    arrowEl.textContent = "↗";

    card.appendChild(iconEl);
    card.appendChild(numberEl);
    card.appendChild(titleEl);
    card.appendChild(descEl);
    card.appendChild(arrowEl);

    servicesContainer.appendChild(card);
}