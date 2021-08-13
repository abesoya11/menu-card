const path = require('path');

const currentTask = process.env.npm_lifecycle_event;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const postcssplugins =[
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer')
]


let cssConfig = {
    
        test: /\.css$/i,
        use : [
            'css-loader',
            {
            loader:'postcss-loader',
            options : {
                postcssOptions : {
                    plugins : postcssplugins
                }
            }
        }],
        
    
}

let pages = fse.readdirSync('./app').filter(function(file){
    return file.endsWith('.html');
}).map(function(page){
    return new HtmlWebpackPlugin({
        filename : page,
        template:`./app/${page}`
    })

})

class RunAfterCompile{
    apply(compiler){
        compiler.hooks.done.tap('copy-image', function(){
            fse.copySync('./app/assets/images','./docs/assets/images');
        })
    }
}

let config ={

    entry : './app/scripts/app.js',

    module : {

        rules : [ cssConfig         
            
        ]
    },
    plugins : pages
    

};



if (currentTask == 'dev'){

    config.output = {
        filename: 'bundled.js',
        path: path.resolve (__dirname,'app')
    }

    config.mode= 'development';

    config.devServer = {
        before: function(app, server){
            server._watch('./app/**/*.html');
        },
        contentBase : path.join(__dirname, 'app'),
        hot:true,
        port:3000,
        host: '0.0.0.0'
    }

    cssConfig.use.unshift('style-loader');

}


if (currentTask == 'build'){

    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename : '[name].[chunkhash].js',
        path: path.resolve (__dirname,'docs')
    },
    config.module.rules.push({
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options:{
                presets: [ '@babel/preset-env']
            }
        }
    })

    config.mode ='production';

    cssConfig.use.unshift(MiniCssExtractPlugin.loader);

    config.plugins.push(
    new MiniCssExtractPlugin({
            filename: 'styles.[chunkhash].css'
                }), 
    new RunAfterCompile(),
    new CleanWebpackPlugin()
    
    );

    config.optimization = {
        splitChunks: {
            chunks: 'all'
        },
        minimize : true,
        minimizer: [ `...`, new CssMinimizerPlugin()]
    }

}

 

module.exports = config;