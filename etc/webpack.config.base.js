const path = require('path');

module.exports = {

    entry: {
        'space-groups': path.resolve(__dirname, '../src/SpaceGroups')
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js",
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
