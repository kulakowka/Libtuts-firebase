const baseUrl = process.env.BASE_URL

const helpers = {
  tutorialUrl (id) {
    return baseUrl + '/tutorial/' + id
  },

  tutorialEditUrl (id) {
    return baseUrl + '/tutorial/' + id + '/edit'
  },

  languageUrl (id) {
    return baseUrl + '/language/' + id
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
    return baseUrl + '/users/' + id
  },

  commentUrl (tutorialId, id) {
    return baseUrl + '/tutorials/' + tutorialId + '#comment_' + id
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
