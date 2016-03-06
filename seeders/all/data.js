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
      contentHtml: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p>',
      tutorial: 't0000001',
      author: 'kulakowka'
    },
    c00002: {
      contentHtml: '<p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.</p>',
      tutorial: 't0000001',
      author: 'kulakowka'
    },
    c00003: {
      contentHtml: '<p>I wanted to share my personal opinion about what happened at the conference (without disclosing the names or content of any private conversations).</p>',
      tutorial: 't0000002',
      author: 'kulakowka'
    },
    c00004: {
      contentHtml: '<p>A number of meetings took place between core developers, miners, and CEOs of Bitcoin companies. As you’re aware, there is a large disagreement about how bitcoin should scale right now. On one side you have the core developers who have concerns about how on-chain scaling will impact decentralization. On the other side you have most bitcoin companies who want growth. The miners are sort of caught in between and are split.</p>',
      tutorial: 't0000002',
      author: 'kulakowka'
    },
    c00005: {
      contentHtml: '<p>I think the organizers of the conference were hoping for some sort of consensus (like what happened in Hong Kong), however it became clear by the end that the divide was too great. The conversations initially focused on various compromises to kick the can down the road on scalability. But as the conversations went on, I became less and less concerned about what short term solution we pick because I realized we all had a much bigger problem: the systemic risk to bitcoin if Bitcoin Core was the only team working on bitcoin.</p><p>The core team contains some very high IQ people, but there are some things which I find very concerning about them as a team after spending some time with them last weekend.</p>',
      tutorial: 't0000002',
      author: 'kulakowka'
    },
    c00006: {
      contentHtml: '<p>Some of them show very poor communication skills or a lack of maturity — this has hurt bitcoin’s ability to bring new protocol developers into the space.</p><p>They prefer ‘perfect’ solutions to ‘good enough’. And if no perfect solution exists they seem ok with inaction, even if that puts bitcoin at risk.</p><p>They seem to have a strong belief that bitcoin will not be able to scale long term, and any block size increase is a slippery slope to a future that they are unwilling to allow.</p>',
      tutorial: 't0000002',
      author: 'kulakowka'
    },
    c00007: {
      contentHtml: '<p>Even though core says they are ok with a hard fork to 2MB (they have it on their own roadmap, just very far in the future), they refuse to prioritize it. They prefer to withhold something that could help the network now, because they don’t trust the community to make educated decisions in the future. They view themselves as the central planners of the network, and protectors of the people. They seem ok with watching bitcoin fail, as long as they don’t compromise on their principles.</p>',
      tutorial: 't0000002',
      author: 'kulakowka'
    },
    c00008: {
      contentHtml: '<p>Being high IQ is not enough for a team to succeed. You need to make reasonable trade offs, collaborate, be welcoming, communicate, and be easy to work with. Any team that doesn’t have this will be unable to attract top talent and will struggle long term. In my opinion, perhaps the biggest risk in bitcoin right now is, ironically, one of the things that has helped it the most in the past: the bitcoin core developers.</p>',
      tutorial: 't0000002',
      author: 'kulakowka'
    },
    c00009: {
      contentHtml: '<h3>Trouble On The Horizon</h3><p>An interesting failure scenario was described at the conference that I think is troubling, and shows just how far things have gotten.</p>',
      tutorial: 't0000002',
      author: 'kulakowka'
    },
    c00010: {
      contentHtml: '<p>The next block reward halving is coming up in July. Let’s say that miners on average are able to mine a coin for $250 (I don’t know the exact number, so this is a guess). After the halving in July their cost to mine a coin will double to $500. If the bitcoin price stays around $425, it will be unprofitable for a number of miners to continue mining.</p>',
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
      t0000001: {
        title: 'Tutorial 1 with source url',
        sourceUrl: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        sourceDomain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      }
    },
    ruby: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        sourceUrl: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        sourceDomain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      },
      t0000002: {
        title: 'Tutorial 2 without source url',
        author: 'kulakowka',
        createdAt: 1453210853551,
        updatedAt: 1457210863551
      }
    }
  },

  _project_tutorials: {
    react: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        sourceUrl: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        sourceDomain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      }
    },
    babel: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        sourceUrl: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        sourceDomain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      },
      t0000002: {
        title: 'Tutorial 2 without source url',
        author: 'kulakowka',
        createdAt: 1453210853551,
        updatedAt: 1457210863551
      }
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
