var assert = require('assert');

describe('Add Numbers', function() {
    it('Should take a string as input', function() {
        typeof input("") === 'string';
    });
});

describe('Calculate add()', function() {
    it('Should sum all values', function() {
        var sum = calculate("1,2,3", "+");
        assert.equal(sum, 6);
    });
});

describe('Calculate subtract()', function() {
    it('Should subtract all values', function() {
        var result = calculate("5,2", "-");
        assert.equal(result, 3);
    });
});

describe('Calculate subtract()', function() {
    it('Should subtract all values into negative', function() {
        var result = calculate("5,2,5", "-");
        assert.equal(result, -2);
    });
});

function input(value) {
    return value.split(',');
}

function calculate(inpVal, operator) {
    var values = input(inpVal);
    if(operator === "+") {
        return add(values);
    }
    if(operator === "-") {
        return subtract(values);
    }
}

function add(inpVal) {
    var result = 0;
    for(var i = 0; i < inpVal.length; i++) {
        result += parseInt(inpVal[i]);
    }
    return result;
}

function subtract(inpVal) {
    var result = inpVal[0];
    for(var i = 1; i < inpVal.length; i++) {
        result -= parseInt(inpVal[i]);
    }
    return result;
}