const utils = require('./utils');

test('utils.multiply(2, 2) should return 4', () => {
    expect(utils.multiply(2, 2)).toBe(4);
});

test('utils.strRevert(\'abc\') should return \'cba\'', () => {
    expect(utils.strRevert('abc')).toBe('cba');
});


