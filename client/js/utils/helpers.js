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

  projectShieldUrl (id) {
    return baseUrl + '/shield/' + id + '.svg'
  },

  picUrl (id) {
    return baseUrl + '/images/pics/' + id + '.png'
  }
}

export default helpers
