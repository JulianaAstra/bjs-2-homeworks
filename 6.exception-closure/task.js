// Задача 1. Форматтер чисел

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

// Задача 2. Треугольник 
class Triangle {
    constructor (sideA, sideB, sideC) {
        if (sideA + sideB < sideC || sideB + sideC < sideA 
            || sideA + sideC < sideB) {
            throw new Error('Треугольник с такими сторонами не существует');        
        }
        this['Side A'] = sideA;
        this['Side B'] = sideB;
        this['Side C'] = sideC;
    }

    get perimeter() {
        return Number((this['Side A'] + this['Side B'] + this['Side C']).toFixed(3));
    }

    get area() {
        const halfPerimeter = this.perimeter / 2;
        const result = Math.sqrt(halfPerimeter * (halfPerimeter - this['Side A']) * (halfPerimeter - this['Side B']) * (halfPerimeter - this['Side C']));
        return Number(result.toFixed(3));
    }
}

function getTriangle (sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },

            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}