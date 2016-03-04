import m from 'mithril'
import helpers from '../../utils/helpers'

export default function About (item) {
  const imgUrl = helpers.picUrl(item)

  return (
    <div class='aboutLanguage'>
      <h1>{item.name}</h1>
      <img src={imgUrl}/>
      <div class='meta'>
        <p>{item.projectsCount} projects</p>
        <p>{item.tutorialsCount} tutorials</p>
      </div>
    </div>
   )
}
