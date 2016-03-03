import m from 'mithril'

export default function MainLayout (header, footer, body) {
  return {
    view () {
      return (
        <div>
          {m.component(header)}
          <div class='layout'>{m.component(body)}</div>
          {m.component(footer)}
        </div>
      )
    }
  }
}
