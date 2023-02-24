// ## Задача 1. Форматтер чисел

function parseCount (number) {
    if (Number.parseFloat(number)) {
        return Number.parseFloat(number);
    } 

    throw new Error ('Невалидное значение');
}

function validateCount (count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}