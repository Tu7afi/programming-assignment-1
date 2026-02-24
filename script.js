// --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК ---
const tabButtons = document.querySelectorAll('.tab-btn');
const calcSections = document.querySelectorAll('.calc-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех
        tabButtons.forEach(btn => btn.classList.remove('active'));
        calcSections.forEach(sec => sec.classList.remove('active'));

        // Добавляем активный класс нажатой вкладке
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// --- РЕЖИМ 1: АРИФМЕТИКА ---
let currentMath = '0';
let previousMath = '';
let operator = undefined;

const currentDisplay = document.getElementById('current-operand');
const previousDisplay = document.getElementById('previous-operand');

function updateMathDisplay() {
    currentDisplay.innerText = currentMath;
    if (operator != null) {
        previousDisplay.innerText = `${previousMath} ${operator}`;
    } else {
        previousDisplay.innerText = '';
    }
}

function appendNumber(number) {
    if (number === '.' && currentMath.includes('.')) return;
    if (currentMath === '0' && number !== '.') {
        currentMath = number;
    } else {
        currentMath = currentMath.toString() + number.toString();
    }
    updateMathDisplay();
}

function appendOperator(op) {
    if (currentMath === '') return;
    if (previousMath !== '') calculateMath();
    operator = op;
    previousMath = currentMath;
    currentMath = '';
    updateMathDisplay();
}

function calculateMath() {
    let result;
    const prev = parseFloat(previousMath);
    const current = parseFloat(currentMath);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': 
            result = current === 0 ? 'Ошибка' : prev / current; 
            break;
        default: return;
    }
    
    currentMath = result;
    operator = undefined;
    previousMath = '';
    updateMathDisplay();
}

function clearMath() {
    currentMath = '0';
    previousMath = '';
    operator = undefined;
    updateMathDisplay();
}

function deleteMath() {
    if (currentMath === 'Ошибка') clearMath();
    currentMath = currentMath.toString().slice(0, -1);
    if (currentMath === '') currentMath = '0';
    updateMathDisplay();
}

// --- РЕЖИМ 2: СКИДКИ ---
function calculateDiscount() {
    const price = parseFloat(document.getElementById('price-input').value) || 0;
    const discountPercent = parseFloat(document.getElementById('discount-input').value) || 0;

    const saved = price * (discountPercent / 100);
    const finalPrice = price - saved;

    // Выводим результат с ограничением до 2 знаков после запятой
    document.getElementById('final-price').innerText = finalPrice.toFixed(2);
    document.getElementById('saved-amount').innerText = saved.toFixed(2);
}

// --- РЕЖИМ 3: ОЦЕНКИ ---
function calculateGrade() {
    const score = parseFloat(document.getElementById('score-input').value) || 0;
    const maxScore = parseFloat(document.getElementById('max-score-input').value);

    // Защита от деления на ноль, если пользователь не ввел максимум
    if (!maxScore || maxScore <= 0) {
        document.getElementById('grade-percent').innerText = 'Ошибка';
        document.getElementById('grade-letter').innerText = 'Проверьте максимум';
        return;
    }

    const percent = (score / maxScore) * 100;
    let letterGrade = '';

    // Стандартная шкала оценок
    if (percent >= 90) letterGrade = '5 (Отлично)';
    else if (percent >= 75) letterGrade = '4 (Хорошо)';
    else if (percent >= 50) letterGrade = '3 (Удовлетворительно)';
    else letterGrade = '2 (Неуд.)';

    document.getElementById('grade-percent').innerText = percent.toFixed(1) + '%';
    document.getElementById('grade-letter').innerText = letterGrade;
}
