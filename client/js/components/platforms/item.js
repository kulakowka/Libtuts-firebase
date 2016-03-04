import m from 'mithril'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Platform (data) {
  const id = data.key()
  const {name, projectsCount} = data.val()
  const url = helpers.platformUrl(id)
  const imgUrl = helpers.picUrl(id)

  return (
    <div class='platformItem' key={id}>
      <a href={url} config={m.route}>
        <img src={imgUrl}/>
      </a>
      <h3><a href={url} config={m.route}>{name}</a></h3>
      <div class='meta'>
        <a href={url} config={m.route} title={numeral(projectsCount).format('0,0')}>{numeral(projectsCount).format('0a')} projects</a>
      </div>
    </div>
   )
}
