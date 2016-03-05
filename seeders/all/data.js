module.exports = {

  // ЯЗЫКИ ПРОГРАММИРОВАНИЯ

  Languages: {
    javascript: {
      name: 'JavaScript'
    },
    ruby: {
      name: 'Ruby'
    }
  },

  // ПРОЕКТЫ

  Projects: {
    react: {
      name: 'React.js',
      description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
      homepage: 'https://facebook.github.io/react/',
      repository: 'https://github.com/facebook/react',
      keywords: ['react', 'ui', 'javascript'],
      languages: {
        javascript: 'JavaScript',
        ruby: 'Ruby'
      }
    },
    babel: {
      name: 'Babel.js',
      description: 'Babel is a compiler for writing next generation JavaScript.',
      homepage: 'https://babeljs.io/',
      repository: 'https://github.com/babel/babel',
      keywords: ['babel', 'compiler', 'javascript'],
      languages: {
        javascript: 'JavaScript'
      }
    }
  },

  // ТУТОРИАЛЫ

  Tutorials: {
    t0000001: {
      title: 'Tutorial 1 with source url',
      sourceUrl: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
      sourceDomain: 'facebook.github.io',
      keywords: ['react', 'reactjs', 'javascript', 'ruby'],
      languages: {
        javascript: 'JavaScript',
        ruby: 'Ruby'
      },
      projects: {
        react: 'React.js',
        babel: 'Babel.js'
      },
      author: 'kulakowka',
      createdAt: 1457210853551,
      updatedAt: 1457210863551
    },
    t0000002: {
      title: 'Tutorial 2 without source url',
      contentHtml: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p><p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.</p>',
      keywords: ['react', 'reactjs', 'javascript', 'ruby'],
      languages: {
        ruby: 'Ruby'
      },
      projects: {
        babel: 'Babel.js'
      },
      author: 'kulakowka',
      createdAt: 1453210853551,
      updatedAt: 1457210863551
    }
  },

  // КОММЕНТАРИИ

  Comments: {
    c00001: {
      text: 'Comment 1',
      tutorial: 't0000001',
      author: 'kulakowka'
    },
    c00002: {
      text: 'Comment 2',
      tutorial: 't0000001',
      author: 'kulakowka'
    },
    c00003: {
      text: 'Comment 3',
      tutorial: 't0000002',
      author: 'kulakowka'
    }
  },

  // ПОЛЬЗОВАТЕЛИ

  Users: {
    kulakowka: {
      name: 'Anton Kulakov'
    }
  },

  // ИНДЕКСЫ

  _language_projects: {
    javascript: {
      react: true,
      babel: true
    },
    ruby: {
      react: true
    }
  },

  _language_tutorials: {
    javascript: {
      t0000001: true
    },
    ruby: {
      t0000001: true,
      t0000002: true
    }
  },

  _project_tutorials: {
    react: {
      t0000001: true
    },
    babel: {
      t0000001: true,
      t0000002: true
    }
  },

  // _project_languages: {
  //   react: {
  //     javascript: true
  //   },
  //   babel: {
  //     javascript: true,
  //     ruby: true
  //   }
  // },

  _tutorial_comments: {
    t0000001: {
      c00001: true,
      c00002: true
    },
    t0000002: {
      c00003: true
    }
  },

  _user_comments: {
    kulakowka: {
      c00001: true,
      c00002: true,
      c00003: true
    }
  }
}
