const baseUrl = process.env.BASE_URL

const helpers = {
  languageUrl (item) {
    return baseUrl + '/language/' + item.id
  },

  platformUrl (item) {
    return baseUrl + '/' + item.id
  },

  projectUrl (item) {
    return baseUrl + '/' + item.platform + '/' + item.name
  },

  projectShieldUrl (item) {
    return baseUrl + '/shield/' + item.platform + '/' + item.name + '.svg'
  },

  picUrl (item) {
    return baseUrl + '/images/pics/' + encodeURIComponent(item.id) + '.png'
  }
}

export default helpers
