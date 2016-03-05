import m from 'mithril'
import request from 'request'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Languages from '../../components/languages/grid'
import Projects from '../../components/projects/grid'
import Tutorials from '../../components/tutorials/list'

const languagesRef = firebase.child('Languages')
const projectsRef = firebase.child('Projects')
const tutorialsRef = firebase.child('Tutorials')

const Homepage = {
  controller (args) {
    var scope = firebaseMixin(m, this)

    scope.onlivedata(languagesRef, (data) => (scope.languages = data))
    scope.onlivedata(projectsRef, (data) => (scope.projects = data))
    scope.onlivedata(tutorialsRef, (data) => (scope.tutorials = data))

    // firebase.on('tutorials', 'value', (data) => this.tutorials(firebase.toArray(data.val())))
    // firebase.on('languages', 'value', (data) => this.languages(firebase.toArray(data.val())))
    // firebase.on('projects', 'value', (data) => this.projects(firebase.toArray(data.val())))

    // --------- ТЕСТИРУЕМ ----------

    // function getTutorial (id) {
    //   return firebase.child('Tutorials').child(id).once('value').then((snap) => {
    //     return snap.val()
    //   })
    // }

    // getTutorial('t0000001').then((tutorial) => console.log(tutorial))

    // ВСЕ ЗАПРОСЫ ПРО КОММЕНТЫ

    // firebase
    // .child('Comments')
    // .on('value', (snapshot) => {
    //   console.log('Все комменты', snapshot.key(), snapshot.val())
    // })

    // request('https://libtuts.firebaseio.com/Comments.json', {json: true, qs: {shallow: true}}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество всех комментов: %d', c, err, json)
    // })

    // firebase
    // .child('Comments')
    // .orderByChild('tutorial')
    // .equalTo('t0000001')
    // .on('value', (snapshot) => {
    //   console.log('Комменты к туториалу', snapshot.key(), snapshot.val())
    // })

    // firebase
    // .child('Comments')
    // .orderByChild('author')
    // .equalTo('kulakowka')
    // .on('value', (snapshot) => {
    //   console.log('Комменты автора', snapshot.key(), snapshot.val())
    // })

    // request('https://libtuts.firebaseio.com/_tutorial_comments/t0000001.json', {json: true}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество комментов к туториалу: %d', c, err, json)
    // })

    // request('https://libtuts.firebaseio.com/_user_comments/kulakowka.json', {json: true}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество комментов автора: %d', c, err, json)
    // })

    // ВСЕ ЗАПРОСЫ ПРО ЯЗЫКИ ПРОГРАММИРОВАНИЯ

    // firebase
    // .child('Languages')
    // .on('value', (snapshot) => {
    //   console.log('Все языки программирования', snapshot.key(), snapshot.val())
    // })

    // request('https://libtuts.firebaseio.com/Languages.json', {json: true, qs: {shallow: true}}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество всех языков программирования: %d', c, err, json)
    // })

    // firebase
    // .child('Languages/javascript')
    // .on('value', (snapshot) => {
    //   console.log('Один язык программирования', snapshot.key(), snapshot.val())
    // })

    // firebase
    // .child('_language_projects/javascript')
    // .on('child_added', (item) => {
    //   firebase.child('Projects/' + item.key()).on('value', (snap) => {
    //     console.log('Проект к языку программирования', snap.key(), snap.val())
    //   })
    // })

    // firebase
    // .child('_language_tutorials/ruby')
    // .on('child_added', (item) => {
    //   firebase.child('Tutorials/' + item.key()).on('value', (snap) => {
    //     console.log('Туториал к языку программирования', snap.key(), snap.val())
    //   })
    // })

    // ВСЕ ЗАПРОСЫ ПРО ПРОЕКТЫ

    // firebase
    // .child('Projects')
    // .on('value', (snapshot) => {
    //   console.log('Все проекты', snapshot.key(), snapshot.val())
    // })

    // request('https://libtuts.firebaseio.com/Projects.json', {json: true, qs: {shallow: true}}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество всех проектов: %d', c, err, json)
    // })

    // firebase
    // .child('Projects/react')
    // .on('value', (snapshot) => {
    //   console.log('Один проект', snapshot.key(), snapshot.val())
    // })

    // firebase
    // .child('Projects/react/languages')
    // .on('value', (snapshot) => {
    //   console.log('Языки программирования для проекта', snapshot.key(), snapshot.val())
    // })

    // firebase
    // .child('_project_tutorials/babel')
    // .on('child_added', (item) => {
    //   firebase.child('Tutorials/' + item.key()).on('value', (snap) => {
    //     console.log('Туториал к проекту', snap.key(), snap.val())
    //   })
    // })

    // request('https://libtuts.firebaseio.com/Projects/react/languages.json', {json: true, qs: {shallow: true}}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество языков программирования к проекту: %d', c, err, json)
    // })

    // request('https://libtuts.firebaseio.com/_project_tutorials/babel.json', {json: true}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество туториалов к проекту: %d', c, err, json)
    // })

    // ВСЕ ЗАПРОСЫ ПРО ТУТОРИАЛЫ

    // firebase
    // .child('Tutorials')
    // .on('value', (snapshot) => {
    //   console.log('Все туториалы', snapshot.key(), snapshot.val())
    // })

    // request('https://libtuts.firebaseio.com/Tutorials.json', {json: true, qs: {shallow: true}}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество всех туториалов: %d', c, err, json)
    // })

    // firebase
    // .child('Tutorials/t0000001')
    // .on('value', (snapshot) => {
    //   console.log('Один туториал', snapshot.key(), snapshot.val())
    // })
    
    // Это спорный метод, но работает :) правда индексы не построить
    // firebase
    // .child('Tutorials')
    // .orderByChild('languages/javascript')
    // .equalTo('JavaScript')
    // .on('value', (snapshot) => {
    //   console.log('Туториалы про javascript', snapshot.key(), snapshot.val())
    // })

    // firebase
    // .child('Tutorials')
    // .orderByChild('author')
    // .equalTo('kulakowka')
    // .on('value', (snapshot) => {
    //   console.log('Туториалы автора', snapshot.key(), snapshot.val())
    // })

    // ВСЕ ЗАПРОСЫ ПРО ПОЛЬЗОВАТЕЛЕЙ

    // firebase
    // .child('Users')
    // .on('value', (snapshot) => {
    //   console.log('Все пользователи', snapshot.key(), snapshot.val())
    // })

    // request('https://libtuts.firebaseio.com/Users.json', {json: true, qs: {shallow: true}}, (err, res, json) => {
    //   let c = Object.keys(json).length
    //   console.log('Колличество всех пользователей: %d', c, err, json)
    // })

    // firebase
    // .child('Users/kulakowka')
    // .on('value', (snapshot) => {
    //   console.log('Один пользователь', snapshot.key(), snapshot.val())
    // })

    // Add tasks onto the queue
    // var taskNumber = 0
    // setInterval(function () {
    //   firebase.child('queue/tasks').push({
    //     taskNumber: ++taskNumber
    //   })
    // }, 1000)

    // firebase.child('languages').once('value', (data) => {
    //   console.log('/languages', data.val())
    //   firebase.child('languages/javascript').once('value', (data) => {
    //     console.log('/languages/javascript', data.val())
    //     firebase.child('languages/javascript/name').once('value', (data) => {
    //       console.log('/languages/javascript/name', data.val())
    //       // Test write
    //       firebase.child('languages/javascript/name').set('gagno')
    //     })
    //   })
    // })

    // firebase.child('platforms').once('value', (data) => {
    //   console.log('/platforms', data.val())
    //   firebase.child('platforms/npm').once('value', (data) => {
    //     console.log('/platforms/npm', data.val())
    //     firebase.child('platforms/npm/name').once('value', (data) => {
    //       console.log('/platforms/npm/name', data.val())
    //       // Test write
    //       firebase.child('platforms/npm/name').set('gagno')
    //     })
    //   })
    // })
  },

  view (ctrl) {
    return (
      <div>
        <div class='row row-l'>
          <div class='col col-7'>
            <section>
              {Tutorials(ctrl.tutorials)}
            </section>
          </div>
          <div class='col col-3'>
            <div>include ../includes/sidebar/about</div>
            <div>include ../includes/sidebar/search</div>
          </div>
        </div>
        <div class='row row-l'>
          <div class='col'>
            <section>
              {Projects(ctrl.projects)}
            </section>
            <section>
              {Languages(ctrl.languages)}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
