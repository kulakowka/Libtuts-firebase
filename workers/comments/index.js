'use strict'

var debug = require('debug')('app:worker:comments')
var ref = require('../../utils/firebase')
var Queue = require('firebase-queue')
var marked = require('marked')

var options = {
  'numWorkers': 1
}

/**
 * Очередь для обработки комментариев
 */
var queue = new Queue(ref.child('queue/comments'), options, function (data, progress, resolve, reject) {

  // Обработаем комментарий
  data.contentHtml = marked(data.content)
  delete data.content

  // Добавим обработанный коммент в нужные места
  var createdRef = ref.child('Comments').push(data)

  createdRef.then((data) => {
    debug('comment %s saved', data.key())

    resolve(data)
  })

  createdRef.catch(reject)
})

// Safe queue shutdown
process.on('SIGINT', () => queue.shutdown().then(() => process.exit(0)))
