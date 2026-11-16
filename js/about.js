console.log('Growing Landing: скрипт js/about.js запущен');

// =========================================================
// БАЗОВЫЕ ДАННЫЕ ПРОФИЛЯ (из ЛР №6)
// =========================================================
const studentName = 'Эрмек';           // Замени на своё имя
const profession = 'Веб-разработчик';
const city = 'Бишкек';                   // Замени на свой город
const isStudent = true;
const projectName = 'Growing Landing';

document.querySelector('#profile-name').textContent = studentName;
document.querySelector('#profile-profession').textContent = profession;
document.querySelector('#profile-city').textContent = city;
document.querySelector('#profile-student').textContent = isStudent ? 'Да (true)' : 'Нет (false)';

const roleTitleEl = document.querySelector('#profile-role-title');
roleTitleEl.textContent = 'Карточка студента';
document.querySelector('#project-upper').textContent = projectName.toUpperCase();
document.querySelector('#name-length').textContent = studentName.length;
document.querySelector('#profile-bio-concat').textContent = 'Меня зовут ' + studentName + ', город — ' + city + '.';
document.querySelector('#profile-bio-template').textContent = `Изучаю веб-разработку и создаю проект ${projectName.toUpperCase()}.`;


// =========================================================
// ЗАДАНИЕ №1. Система определения уровня разработчика
// =========================================================
let projectsCount = 5;   // Попробуй: 5 (успех), 0, 12 или -2 (ошибка)
let age = 20;            // Попробуй: 20 (совершеннолетний) или 16 (несовершеннолетний)
let experience = 8;      // Опыт в месяцах

document.querySelector('#profile-age').textContent = age;

let developerLevel = '';

if (projectsCount < 0) {
    developerLevel = 'Ошибка: отрицательное количество проектов';
} else if (projectsCount === 0) {
    developerLevel = 'Нет проектов';
} else if (projectsCount >= 1 && projectsCount <= 2) {
    developerLevel = 'Новичок';
} else if (projectsCount >= 3 && projectsCount <= 5) {
    developerLevel = 'Начинающий разработчик';
} else if (projectsCount >= 6 && projectsCount <= 10) {
    developerLevel = 'Продвинутый разработчик';
} else {
    developerLevel = 'Опытный разработчик';
}

let ageStatus = '';
if (age < 0) {
    ageStatus = 'Ошибка: некорректный возраст';
} else if (age >= 18) {
    ageStatus = 'Совершеннолетний';
} else {
    ageStatus = 'Несовершеннолетний';
}

let juniorStatus = '';
if (projectsCount < 0 || age < 0 || experience < 0) {
    juniorStatus = 'Невозможно определить из-за ошибочных данных';
} else if (age >= 18 && experience >= 6 && projectsCount >= 3) {
    juniorStatus = 'Может претендовать на Junior';
} else {
    juniorStatus = 'Пока не соответствует требованиям Junior';
}

document.querySelector('#dev-level').textContent = developerLevel;
document.querySelector('#age-status').textContent = ageStatus;
document.querySelector('#junior-status').textContent = juniorStatus;


// =========================================================
// ЗАДАНИЕ №2. Проверка доступа и система скидок
// =========================================================
let userRole = 'student';     // Варианты: 'student', 'teacher', 'guest'
let isRegistered = true;      // true или false
let basePrice = 10000;        // Исходная цена в сомах (попробуй -500 для проверки ошибки)

let accessMessage = '';
let hasAccess = false;

if (!isRegistered) {
    accessMessage = 'Доступ запрещён: пользователь не зарегистрирован';
} else if (age < 18) {
    accessMessage = 'Доступ запрещён: только для совершеннолетних (18+)';
} else if (isRegistered && age >= 18 && (userRole === 'student' || userRole === 'teacher')) {
    accessMessage = 'Доступ разрешён';
    hasAccess = true;
} else {
    accessMessage = 'Доступ запрещён: недостаточная роль (' + userRole + ')';
}

// 2. Расчёт скидки и итоговой стоимости
let discountPercent = 0;

if (userRole === 'student') {
    discountPercent = 30;
} else if (userRole === 'teacher') {
    discountPercent = 20;
} else {
    discountPercent = 0;
}

let basePriceText = '';
let discountAmountText = '';
let finalPriceText = '';

if (basePrice < 0) {
    basePriceText = 'Ошибка: отрицательная цена';
    discountAmountText = '—';
    finalPriceText = 'Расчёт невозможен';
} else {
    const discountAmount = (basePrice * discountPercent) / 100;
    const finalPrice = basePrice - discountAmount;

    basePriceText = basePrice + ' сом';
    discountAmountText = discountAmount + ' сом';
    finalPriceText = finalPrice + ' сом';
}

document.querySelector('#access-status').textContent = accessMessage;
document.querySelector('#base-price-out').textContent = basePriceText;
document.querySelector('#discount-percent').textContent = discountPercent;
document.querySelector('#discount-amount').textContent = discountAmountText;
document.querySelector('#final-price-out').textContent = finalPriceText;


// =========================================================
// ЗАДАНИЕ №3. Категории проектов через switch
// =========================================================
const selectedCategory = document.querySelector('#projectType').value;

let categoryTitle = '';
let categoryDescription = '';
let categoryExample = '';

switch (selectedCategory) {
    case 'web':
        categoryTitle = 'Веб-сайт';
        categoryDescription = 'Многостраничные сайты, лендинги и веб-сервисы для браузера.';
        categoryExample = 'Интернет-магазин';
        break;
    case 'mobile':
        categoryTitle = 'Мобильное приложение';
        categoryDescription = 'Нативные и кроссплатформенные приложения для iOS и Android.';
        categoryExample = 'Приложение доставки';
        break;
    case 'game':
        categoryTitle = 'Игра';
        categoryDescription = 'Интерактивные игровые миры с физикой, уровнями и логикой.';
        categoryExample = '2D-платформер';
        break;
    case 'design':
        categoryTitle = 'UX/UI дизайн';
        categoryDescription = 'Проектирование пользовательских сценариев и визуальных интерфейсов.';
        categoryExample = 'Макет в Figma';
        break;
    case 'other':
        categoryTitle = 'Другое';
        categoryDescription = 'Нестандартные пет-проекты, боты и учебные эксперименты.';
        categoryExample = 'Собственный проект';
        break;
    default:
        categoryTitle = 'Категория не найдена';
        categoryDescription = 'Описание для неизвестного типа проекта отсутствует.';
        categoryExample = 'Нет примера';
        break;
}

document.querySelector('#cat-title').textContent = categoryTitle;
document.querySelector('#cat-desc').textContent = categoryDescription;
document.querySelector('#cat-example').textContent = categoryExample;


// =========================================================
// ЗАДАНИЕ №4. Итоговая карточка разработчика
// =========================================================
const isProjectCompleted = projectsCount >= 3 && hasAccess;
const projectStatus = isProjectCompleted ? 'Завершён' : 'В разработке';

document.querySelector('#sum-name-age').textContent = `${studentName}, ${age} лет`;
document.querySelector('#sum-adult').textContent = ageStatus;

document.querySelector('#sum-level').textContent = developerLevel;
document.querySelector('#sum-projects').textContent = projectsCount;
document.querySelector('#sum-exp').textContent = experience;

document.querySelector('#sum-junior').textContent = juniorStatus;

document.querySelector('#sum-cat-title').textContent = categoryTitle;
document.querySelector('#sum-cat-desc').textContent = categoryDescription;
document.querySelector('#sum-cat-example').textContent = categoryExample;

document.querySelector('#sum-access').textContent = accessMessage;

document.querySelector('#sum-base-price').textContent = basePriceText;
document.querySelector('#sum-discount').textContent = `${discountPercent}% (${discountAmountText})`;
document.querySelector('#sum-final-price').textContent = finalPriceText;

document.querySelector('#sum-project-status').textContent = projectStatus;