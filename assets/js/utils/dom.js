const dom = {
  // Почему то это не работает
  one (node, type, callback) {
    const cb = (e) => {
      // console.log('callback, removeEventListener')
      node.removeEventListener(e.type, cb)
      return callback(e)
    }

    node.addEventListener(type, cb)
    console.log('event attached')
  }
}

export default dom
