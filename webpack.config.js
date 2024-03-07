const path = require('path');

module.exports = {
    entry: './src/card-component.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}