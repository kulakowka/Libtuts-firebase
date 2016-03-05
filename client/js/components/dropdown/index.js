import m from 'mithril'
// import dom from '../../utils/dom'

const Dropdown = {
  controller (args) {
    return {
      isOpen: m.prop(false),
      toggle (e) {
        e.preventDefault()
        this.isOpen(true)
      }
    }
  },
  view (ctrl, args) {
    let toggle = ctrl.toggle.bind(ctrl)

    return (
      <span class={'dropdown' + (ctrl.isOpen() ? ' open' : '')}>
        <a class='item handle' onclick={toggle}>{args.handle}</a>
        {args.items}
      </span>
    )
  }
}

export default Dropdown
