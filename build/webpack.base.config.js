const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/index.ts'  //入口文件
    },
    output: {
        filename: 'app.js'      //输出文件
    },
    resolve: {
        extensions: ['.js','.ts', '.jsx'] //扩展名
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }) //通过这个插件生成首页，把页面自动嵌入文件中
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
}