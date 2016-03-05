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
      languages: {
        javascript: 'JavaScript',
        ruby: 'Ruby'
      }
    },
    babel: {
      name: 'Babel.js',
      languages: {
        javascript: 'JavaScript'
      }
    }
  },

  // ТУТОРИАЛЫ

  Tutorials: {
    t0000001: {
      title: 'Tutorial 1',
      languages: {
        javascript: 'JavaScript',
        ruby: 'Ruby'
      },
      projects: {
        react: 'React.js',
        babel: 'Babel.js'
      },
      author: 'kulakowka'
    },
    t0000002: {
      title: 'Tutorial 2',
      languages: {
        ruby: 'Ruby'
      },
      projects: {
        babel: 'Babel.js'
      },
      author: 'kulakowka'
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
