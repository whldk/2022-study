//0、路径
const path = require('path')

//1、导入HTML 插件, 得到一个构造函数 、 用于放在内存中
const HtmlPlugin = require('html-webpack-plugin')
//2 、创建HTML 插件的实例对象、自动注入脚本
const htmlPlugin = new HtmlPlugin({
    template : './src/index.html',          //指定源文件的存放路径
    filename:'./index.html'                 //指定生成的文件存放路径
})


//注意花括号是 {} 解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin') 

//3、自动清理打包文件


module.exports = {
    //代表 webpack运行的模式 ,可选值有二个 development 和 production
    //开发用development 打包速度快、 线上选 production 减少体积
    mode:'development',
    
    //生成source-map- 在开发调试阶段、值设置为 eval-source-map  ,生产环境为 nosources-source-map \ 或者关闭
    devtool:'nosources-source-map',

    //插件列表、运行webpack的时候 会加载并调用的这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],

    //指定入口文件
    entry: path.join(__dirname, './src/index.js'),

    //指定输出目录和文件名称
    output: {
        path:  path.join(__dirname, './dist'),  //路径名
        filename: 'js/index.js'        //输出的文件名
    },

    //修改directory路径、避免系统path变量
    devServer: {
        open:true,
        host:'127.0.0.1',
        port:8080,      //默认端口是80
        static: {
          directory: path.join(__dirname, "/"),
        },
      },

    //所有第三方文件模块的匹配配置
    module:{
        rules:[    
            //loader css文件
            {
                 test:/\.css$/, 
                 use:['style-loader', 'css-loader'] 
            },

            //loader less文件
            { 
                test:/\.less$/, 
                use:['style-loader', 'css-loader', 'less-loader']
            },

            //loader url | file文件
            {
                test:/\.jpg|png|gif$/, 
                use:{
                   loader:'url-loader',
                   options:{
                        limit:1000,
                        outputPath:'images'     //图片输出目录
                   }
                } //大于limit的值 不会转换base64 、小于或等于才会进行转换
            },       


            //使用babel-loader 处理高级语法的
            //再配置bable-loader的时候，程序员只需要把自己的代码进行转换即可、一定要排除node_modules 目录中的js文件
            //因为第三方包中的JS兼容性 不需要程序员关系
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
              }
        ]
    },


    resolve:{
        alias :{
            // webpack 会压缩 代码中 @ 符合比奥是src 这一层的目录
            '@': path.join(__dirname, '/src/')    
        }
    }

 

}