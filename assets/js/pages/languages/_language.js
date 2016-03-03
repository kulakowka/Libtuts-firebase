import m from 'mithril'

export default function Language (language) {
  return (
    <div>
      <h2><a href={'/language/' + language.slug} config={m.route}>{language.name}</a></h2>
      <p>tutorialsCount: {language.tutorialsCount}</p>
    </div>
   )
}
