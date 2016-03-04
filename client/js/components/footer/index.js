import m from 'mithril'

const Footer = {
  view () {
    return (
      <footer>
        <div class='inner'>
          <div class='about'>&copy; 2016 Libtuts, Inc.</div>
          <nav class='mainMenu'>
            <a href='/terms' config={m.route}>Terms</a>
            <a href='/privacy' config={m.route}>Privacy</a>
            <a href='/security' config={m.route}>Security</a>
            <a href='/help' config={m.route}>Help</a>
          </nav>
          <nav class='secondMenu'>
            <a href='/about' config={m.route}>About</a>
            <a href='/blog' config={m.route}>Blog</a>
            <a href='/partners' config={m.route}>Partners</a>
            <a href='/media' config={m.route}>Media</a>
            <a href='/contact' config={m.route}>Contact</a>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
