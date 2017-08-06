var assert = require('assert');

describe('Add Numbers', function() {
    it('Should take a string as input', function() {
        typeof addNumbers("") === 'string';
    });
});

describe('Add Numbers', function() {
    it('Should add two numbers', function() {
        var sum = addNumbers("1,5");
        assert.equal(sum, 6);
    });
});

describe('Add Numbers', function() {
    it('Should add three numbers in a string', function() {
        var sum = addNumbers("1,2,3");
        assert.equal(sum, 6);
    });
});

function addNumbers(input) {
    var values = input.split(',');
    var sum = 0;
    for(var i = 0; i < values.length; i++) {
        sum += parseInt(values[i]);
    }
    return sum;
}