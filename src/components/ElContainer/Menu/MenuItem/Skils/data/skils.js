const skils = [
  {
    id: 1,
    header: 'Языки программирования',
    abilities: [
      {
        id: 1,
        name: 'Pascal ',
        colYear: 1,
        lastYear: '2012',
        level: 'Основы',
      },
      {
        id: 2,
        name: 'Delphi (Object Pascal)',
        colYear: 3,
        lastYear: '2014',
        level: 'Средний',
      },
      {
        id: 3,
        name: 'SQL',
        colYear: 4,
        lastYear: 'Настоящее время',
        level: 'Хороший',
      },
      {
        id: 4,
        name: 'PHP',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      },
      {
        id: 5,
        name: 'Java',
        colYear: 4,
        lastYear: 'Настоящее время',
        level: 'Средний',
      },
      {
        id: 6,
        name: 'JavaScript',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Хороший',
      }
    ],
  },
  {
    id: 2,
    header: 'Фреймворки',
    abilities: [
      {
        id: 1,
        name: 'GWT',
        colYear: 2,
        lastYear: '2016',
        level: 'Основы',
      },
      {
        id: 2,
        name: 'React',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      },
      {
        id: 3,
        name: 'jQuery',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      },
      {
        id: 4,
        name: 'Node.js',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      },
      {
        id: 5,
        name: 'Bootstrap',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      },
      {
        id: 6,
        name: 'React Bootstrap',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      },
      {
        id: 7,
        name: 'Material-UI',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      }
    ],
  },
  {
    id: 3,
    header: 'СУБД',
    abilities: [
      {
        id: 1,
        name: 'Firebird',
        colYear: 4,
        lastYear: '2017',
        level: 'Средний',
      },
      {
        id: 2,
        name: 'MySQL',
        colYear: 1,
        lastYear: '2019',
        level: 'Основы',
      },
      {
        id: 3,
        name: 'Oracle',
        colYear: 1,
        lastYear: '2019',
        level: 'Основы',
      }
    ],
  },
  {
    id: 4,
    header: 'Сетевые протоколы и технологии',
    abilities: [
      {
        id: 1,
        name: 'HTTP',
        colYear: 2,
        lastYear: 'Настоящее время',
        level: 'Хороший',
      },
      {
        id: 2,
        name: 'SOAP',
        colYear: 2,
        lastYear: '2016',
        level: 'Средний',
      }
    ],
  },
  {
    id: 5,
    header: 'Языки описания и преобразования данных',
    abilities: [
      {
        id: 1,
        name: 'XML',
        colYear: 3,
        lastYear: '2017',
        level: 'Средний',
      },
      {
        id: 2,
        name: 'XSD',
        colYear: 2,
        lastYear: '2016',
        level: 'Основы',
      },
      {
        id: 3,
        name: 'WSDL',
        colYear: 2,
        lastYear: '2016',
        level: 'Основы',
      },
      {
        id: 4,
        name: 'HTML',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      },
      {
        id: 5,
        name: 'CSS',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      }
    ],
  },
  {
    id: 6,
    header: 'Управление проектами и задачами',
    abilities: [
      {
        id: 1,
        name: 'Redmine',
        colYear: 2,
        lastYear: '2016',
        level: 'Основы',
      },
      {
        id: 2,
        name: 'Jenkins',
        colYear: 2,
        lastYear: '2016',
        level: 'Основы',
      }
    ],
  },
  {
    id: 7,
    header: 'ПО для групповой работы',
    abilities: [
      {
        id: 1,
        name: 'TortoiseSVN/Subversion',
        colYear: 2,
        lastYear: '2016',
        level: 'Средний',
      },
      {
        id: 2,
        name: 'Git',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      }
    ],
  },
  {
    id: 8,
    header: 'Инструменты разработки',
    abilities: [
      {
        id: 1,
        name: 'Embarcadero RAD Studio',
        colYear: 2,
        lastYear: '2014',
        level: 'Средний',
      },
      {
        id: 2,
        name: 'IntelliJ IDEA',
        colYear: 4,
        lastYear: 'Настоящее время',
        level: 'Хороший',
      },
      {
        id: 3,
        name: 'WebStorm',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      },
      {
        id: 4,
        name: 'Visual Studio Code',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Хороший',
      }
    ],
  },
  {
    id: 9,
    header: 'ORM',
    abilities: [
      {
        id: 1,
        name: 'Hibernate',
        colYear: 1,
        lastYear: '2017',
        level: 'Основы',
      }
    ],
  },
  {
    id: 10,
    header: 'Веб-сервера и сервера приложений',
    abilities: [
      {
        id: 1,
        name: 'Tomcat',
        colYear: 2,
        lastYear: '2016',
        level: 'Основы',
      },
      {
        id: 2,
        name: 'Apache',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      },
      {
        id: 3,
        name: 'Open Server Panel',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      }
    ],
  },
  {
    id: 11,
    header: 'Средсва сборки',
    abilities: [
      {
        id: 1,
        name: 'Ant',
        colYear: 2,
        lastYear: '2016',
        level: 'Средний',
      },
      {
        id: 2,
        name: 'Maven',
        colYear: 1,
        lastYear: '2017',
        level: 'Основы',
      },
      {
        id: 3,
        name: 'Gradle',
        colYear: 2,
        lastYear: '2017',
        level: 'Основы',
      },
      {
        id: 4,
        name: 'Webpack',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Средний',
      }
    ],
  },
  {
    id: 12,
    header: 'Прочее',
    abilities: [
      {
        id: 1,
        name: 'JSON',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Хороший',
      },
      {
        id: 2,
        name: 'ESLint',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      },
      {
        id: 3,
        name: 'Prettier',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Основы',
      },
      {
        id: 4,
        name: 'react-reval',
        colYear: 1,
        lastYear: 'Настоящее время',
        level: 'Хорошо',
      }
    ],
  }
];

export default skils;