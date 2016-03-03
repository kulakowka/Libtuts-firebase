import m from 'mithril'
import numeral from 'numeral'

export default function Platform (item) {
  let url = '/' + item.slug

  return (
    <div class='platformItem'>
      <a href={url} config={m.route}>
        <img src={'/images/pics/' + encodeURIComponent(item.slug) + '.png'}/>
      </a>
      <h3><a href={url} config={m.route}>{item.name}</a></h3>
      <div class='meta'>
        <a href={url} title={numeral(item.projectsCount).format('0,0')}>{numeral(item.projectsCount).format('0a')} projects</a>
      </div>
    </div>
   )
}
