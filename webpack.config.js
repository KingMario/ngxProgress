const { root, nodeModules } = require('./helpers');

module.exports = function (options, webpackOptions) {
    options = options || {};

    return [{
        entry: root('./src/index.ts'),
        context: root('./src'),
        target: 'node',
        devtool: 'source-map',
        externals: nodeModules,
        output: {
            path: root('bundles'),
            filename: 'index.umd.js',
            libraryTarget: 'umd',
            library: 'ngProgressbar'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.ts$/,
                    loader: 'tslint-loader',
                    exclude: [root('node_modules')]
                },
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader?declaration=false',
                    exclude: [/\.e2e\.ts$/]
                }

            ]
        },
        plugins: []
    }];
}
