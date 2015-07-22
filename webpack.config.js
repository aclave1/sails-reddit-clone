var webpack = require('webpack');
var path = require('path');


 console.log('webpacking');
module.exports = {
    context: __dirname + '/assets/js',
    //the file to build
    entry: './main.js',
    output: {
        path: __dirname + '/assets/js',
        filename: 'app-bundle.js'
    },
    resolve: {
        alias: {
            //file path aliases relative to "context"

        },
        root: ['assets/js','node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        modulesDirectories:['node_modules']
    },
    resolveLoader:{
        root: [path.join(__dirname,"node_modules")]
    },
    plugins: [
    ],
    module: {
        loaders: [
            {test: /\.html$/, loader: "html-loader"},
            {test:/\.ts$/,loader:'typescript-loader'}
        ],

        noParse: [
           //path to files not to parse, good for prebuilt libs
          /sails.io.js$/

        ]
    },
    devServer: {
        contentBase: "./.tmp/public",
        hot: true,
        inline: true
    }
};
