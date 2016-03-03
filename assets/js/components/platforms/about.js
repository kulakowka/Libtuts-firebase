import m from 'mithril'

export default function About (item) {
  return (
    <div class='aboutPlatform'>
      <h1>{item.name}</h1>
      <img src={'/images/pics/' + encodeURIComponent(item.slug) + '.png'}/>
      <div class='meta'>
        <p>{item.projectsCount} projects</p>
      </div>
    </div>
   )
}
