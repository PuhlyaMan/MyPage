const path = require("path");

module.exports = {
  entry: "./src/index.js", //входные данные
  output: {
    //выходные данные
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "dist")], //папка с ресурсами и index.html
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true
  },

  module: {
    //массив правил
    rules: [
      //Обработка js файлов
      {
        //все файлы с расширением .m и .js
        test: /\.m?js$/,
        //из каталогов node_modules или bower_components
        exclude: /node_modules/,
        //лоадер
        use: {
          loader: "babel-loader"
        }
      },
      //Обработка css
      {
        test: /\.css$/,
        use: [
          "style-loader", //второй обработчик
          {
            loader: "css-loader", //первый обработчик
            options: {
              modules: true //стили применяются только к тем компонентам, в которые они импортированы
            }
          }
        ]
      },
      //статические ресурсы
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader"]
      },
    ]
  }
};
