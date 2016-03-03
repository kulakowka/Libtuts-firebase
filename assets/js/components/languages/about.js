import m from 'mithril'

export default function About (item) {
  return (
    <div class='aboutLanguage'>
      <h1>{item.name}</h1>
      <img src={'/images/pics/' + encodeURIComponent(item.slug) + '.png'}/>
      <div class='meta'>
        <p>{item.projectsCount} projects</p>
        <p>{item.tutorialsCount} tutorials</p>
      </div>
    </div>
   )
}
