const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  //Входные данные (entry: "./src/index.js",)
  entry: {
    index: "./index.js"
  },
  output: {
    //Выходные данные
    path: path.join(__dirname, "dist"),
    filename: "[name].js" //index.js
  },
  mode: "development",

  module: {
    //массив правил
    rules: [
      //Статические ресурсы
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader"]
      },
      //Обработка js файлов
      {
        //Все файлы с расширением .m и .js
        test: /\.m?js$/,
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
          "style-loader", //Второй обработчик
          {
            loader: "css-loader", //Первый обработчик
            options: {
              modules: true //Стили применяются только к тем компонентам, в которые они импортированы
            }
          }
        ]
      }
    ]
  },

  /*plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack app"
    }),
  ],*/
};
