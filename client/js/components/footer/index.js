import m from 'mithril'
import helpers from '../../utils/helpers'

const Footer = {
  view () {
    const year = new Date().getFullYear()
    return (
      <footer>
        <div class='inner'>
          <div class='about'>&copy; {year} Libtuts, Inc.</div>
          <nav class='mainMenu'>
            <a href={helpers.infoPageUrl('terms')} config={m.route}>Terms</a>
            <a href={helpers.infoPageUrl('privacy')} config={m.route}>Privacy</a>
            <a href={helpers.infoPageUrl('security')} config={m.route}>Security</a>
            <a href={helpers.infoPageUrl('help')} config={m.route}>Help</a>
          </nav>
          <nav class='secondMenu'>
            <a href={helpers.infoPageUrl('about')} config={m.route}>About</a>
            <a href={helpers.infoPageUrl('contact')} config={m.route}>Contact</a>
            <a href='https://twitter.com/libtuts' target='_blank'>Twitter</a>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
