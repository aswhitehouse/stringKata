var assert = require('assert');

describe('Add Numbers', () => {
    it('Should take a string as input', () => {
        typeof input("") === 'string';
    });
});

describe('Calculate add()', () => {
    it('Should sum all values', () => {
        var sum = calculate("1,2,3", "+");
        assert.equal(sum, 6);
    });
});

describe('Calculate subtract()', () => {
    it('Should subtract all values', () => {
        var result = calculate("5,2", "-");
        assert.equal(result, 3);
    });
});

describe('Calculate subtract()', () => {
    it('Should subtract all values into negative', () => {
        console.log(new MathFunction("5,2,5", "-"));
        var result = calculate("5,2,5", "-");
        assert.equal(result, -2);
    });
});

const input = (value) => value.split(',');

const calculate = (inpVal, operator) => {
    var values = input(inpVal);
    if(operator === "+") {
        return add(values);
    }
    if(operator === "-") {
        return subtract(values);
    }
}

const add = (inpVal) => {
    var result = 0;
    for(var i = 0; i < inpVal.length; i++) {
        result += parseInt(inpVal[i]);
    }
    return result;
}

const subtract = (inpVal) => {
    var result = inpVal[0];
    for(var i = 1; i < inpVal.length; i++) {
        result -= parseInt(inpVal[i]);
    }
    return result;
}

class MathFunction {
    constructor(values, functionType) {
        this.values = values;
        this.functionType = functionType;
    }
}