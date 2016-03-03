import m from 'mithril'

export default function Platform (item) {
  return (
    <div class='platformItem'>
      <h2><a href={'/' + item.slug} config={m.route}>{item.name}</a></h2>
      <p>tutorialsCount: {item.tutorialsCount}</p>
      <p>projectsCount: {item.projectsCount}</p>
    </div>
   )
}
