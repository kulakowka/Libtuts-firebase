import m from 'mithril'

export default function MainLayout (header, footer, body) {
  return {
    view () {
      return [
        m.component(header),
        <div class='layout'>{m.component(body)}</div>,
        m.component(footer)
      ]
    }
  }
}
