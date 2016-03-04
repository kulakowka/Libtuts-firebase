import m from 'mithril'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Language (data) {
  const id = data.key()
  const {name, projectsCount, tutorialsCount} = data.val()
  const url = helpers.languageUrl(id)
  const imgUrl = helpers.picUrl(id)

  return (
    <div class='languageItem' key={id}>
      <a href={url} config={m.route}>
        <img src={imgUrl}/>
      </a>
      <h3><a href={url} config={m.route}>{name}</a></h3>
      <div class='meta'>
        <a href={url} config={m.route} title={numeral(tutorialsCount).format('0,0')}>{numeral(tutorialsCount).format('0a')} tutorials</a>
        <a href={url} config={m.route} title={numeral(projectsCount).format('0,0')}>{numeral(projectsCount).format('0a')} projects</a>
      </div>
    </div>
   )
}
