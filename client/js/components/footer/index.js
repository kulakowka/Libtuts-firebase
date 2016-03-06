import m from 'mithril'
import helpers from '../../utils/helpers'

const Footer = {
  view () {
    return (
      <footer>
        <div class='inner'>
          <div class='about'>&copy; 2016 Libtuts, Inc.</div>
          <nav class='mainMenu'>
            <a href={helpers.infoPageUrl('terms')} config={m.route}>Terms</a>
            <a href={helpers.infoPageUrl('privacy')} config={m.route}>Privacy</a>
            <a href={helpers.infoPageUrl('security')} config={m.route}>Security</a>
            <a href={helpers.infoPageUrl('help')} config={m.route}>Help</a>
          </nav>
          <nav class='secondMenu'>
            <a href={helpers.infoPageUrl('about')} config={m.route}>About</a>
            <a href={helpers.infoPageUrl('blog')} config={m.route}>Blog</a>
            <a href={helpers.infoPageUrl('partners')} config={m.route}>Partners</a>
            <a href={helpers.infoPageUrl('media')} config={m.route}>Media</a>
            <a href={helpers.infoPageUrl('contact')} config={m.route}>Contact</a>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
