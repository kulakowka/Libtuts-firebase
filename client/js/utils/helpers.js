const baseUrl = process.env.BASE_URL

const helpers = {
  tutorialsUrl () {
    return baseUrl + '/tutorials'
  },

  tutorialUrl (id) {
    return baseUrl + '/tutorial/' + id
  },

  addTutorialUrl () {
    return baseUrl + '/tutorials/new'
  },

  tutorialEditUrl (id) {
    return baseUrl + '/tutorial/' + id + '/edit'
  },

  languagesUrl () {
    return baseUrl + '/languages'
  },

  languageUrl (id) {
    return baseUrl + '/language/' + id
  },

  projectsUrl () {
    return baseUrl + '/projects'
  },

  projectUrl (id) {
    return baseUrl + '/project/' + id
  },

  keywordUrl (keyword) {
    return baseUrl + '/search?keyword=' + keyword
  },

  projectShieldUrl (id) {
    return baseUrl + '/shield/' + id + '.svg'
  },

  picUrl (id) {
    return baseUrl + '/images/pics/' + id + '.png'
  },

  userUrl (id) {
    return baseUrl + '/user/' + id
  },

  domainUrl (domain) {
    return baseUrl + '/domain/' + domain
  },

  commentUrl (tutorialId, id) {
    return baseUrl + '/tutorial/' + tutorialId + '#comment_' + id
  },

  settingsUrl () {
    return baseUrl + '/settings'
  },

  resetPasswordUrl () {
    return baseUrl + '/auth/reset_password'
  },

  signInUrl () {
    return baseUrl + '/auth/signin'
  },

  signUpUrl () {
    return baseUrl + '/auth/signup'
  },

  infoPageUrl (page) {
    return baseUrl + '/' + page
  },

  /**
   * toArray: Return an array from object
   *
   * > toArray({node: true, js: true})
   * [{key: 'node', value: true}, {key: 'js', value: true}]
   */
  toArray (obj) {
    return Object.keys(obj).map((key) => {
      return {key, value: obj[key]}
    })
  },

  /**
   * > tagsByCommas(keywords, (keyword, i) => <a href={'/search?keywords=' + keyword} key={i}>{keyword}</a>)}
   */
  tagsByCommas (data, iterator) {
    const tags = (data || []).map(iterator)
    return helpers.intersperse(tags, ', ')
  },

  /* intersperse: Return an array with the separator interspersed between
   * each element of the input array.
   *
   * > _([1,2,3]).intersperse(0)
   * [1,0,2,0,3]
   */
  intersperse (arr, sep) {
    if (arr.length === 0) return []
    return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]])
  }
}

export default helpers
