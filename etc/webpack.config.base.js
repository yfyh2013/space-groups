const path = require('path');

module.exports = {

    entry: {
        'SpaceGroup': path.resolve(__dirname, '../src/SpaceGroup')
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "SpaceGroup.js",
        libraryTarget: 'umd',
        library: 'spaceGroups',
        umdNamedDefine: true
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel-loader',
        }, {
            test: /\.ts$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'awesome-typescript-loader'
        }],
    },

    resolve: {
        extensions: ['.ts', '.js']
    }
};
