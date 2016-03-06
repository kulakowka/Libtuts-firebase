// создадим новый таск для обработки коммента
    let ref = firebase.child('queue/comments/tasks')

    ref.push({
      content: '### Hello its comment\nThen its a text of this comment',
      tutorial: 't0000001',
      author: 'kulakowka'
    }, (err) => console.log('Comment pushed to queue', err))