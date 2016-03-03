import m from 'mithril'

export default function Language (item) {
  return (
    <div class='languageItem'>
      <h2><a href={'/language/' + item.slug} config={m.route}>{item.name}</a></h2>
      <p>tutorialsCount: {item.tutorialsCount}</p>
      <p>projectsCount: {item.projectsCount}</p>
    </div>
   )
}
