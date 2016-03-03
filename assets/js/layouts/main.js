import m from 'mithril'

export default function MainLayout (nav, body) {
  return {
    view () {
      return (
        <div class='layout'>
          <header>{m.component(nav)}</header>
          <div class='body'>{m.component(body)}</div>
        </div>
      )
    }
  }
}
