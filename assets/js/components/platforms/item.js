import m from 'mithril'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Platform (item) {
  const url = helpers.platformUrl(item)
  const imgUrl = helpers.picUrl(item)

  return (
    <div class='platformItem' key={item.id}>
      <a href={url} config={m.route}>
        <img src={imgUrl}/>
      </a>
      <h3><a href={url} config={m.route}>{item.name}</a></h3>
      <div class='meta'>
        <a href={url} config={m.route} title={numeral(item.projectsCount).format('0,0')}>{numeral(item.projectsCount).format('0a')} projects</a>
      </div>
    </div>
   )
}
