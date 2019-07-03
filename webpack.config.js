const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  //state: 'errors-only',

  //Входные данные (entry: "./src/index.js",)
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    //Выходные данные
    path: path.join(__dirname, "dist"),
    //filename: "js/[name].js" 
    filename: "main.[name].js"
  },

  /*resolve: {
    extensions: ['.js', '.jsx']
  },*/

  module: {
    //массив правил
    rules: [
      //Обработка js файлов
      {
        //Все файлы с расширением .m и .js
        test: /\.(js|jsx)$/,
        //Из каталогов node_modules или bower_components
        exclude: /node_modules/,
        //Лоадер
        use: {
          loader: "babel-loader"
        }
      },
      //Обработка css
      {
        test: /\.css$/,
        use: [
          "style-loader",
          //MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      //Статические ресурсы
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "image/[name].[ext]"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      //filename: "css/[name].css"
      filename: "main.[name].css"
    })
  ],

  devServer: {
    port: 9000
  }
};
