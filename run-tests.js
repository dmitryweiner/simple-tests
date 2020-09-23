const utils = require('./utils');

if (utils.multiply(2, 2) !== 4) {
    console.log('utils.multiply(2, 2) returned wrong');
} else {
    console.log('utils.multiply(2, 2) returned correct');
}

if (utils.strRevert('abc') === 'cba') {
    console.log('utils.strRevert(\'abc\') correct');
} else {
    console.log('utils.strRevert(\'abc\') wrong');
}

