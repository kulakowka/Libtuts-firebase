import m from 'mithril'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Language (item) {
  const url = helpers.languageUrl(item)
  const imgUrl = helpers.picUrl(item)

  return (
    <div class='languageItem' key={item.id}>
      <a href={url} config={m.route}>
        <img src={imgUrl}/>
      </a>
      <h3><a href={url} config={m.route}>{item.name}</a></h3>
      <div class='meta'>
        <a href={url} config={m.route} title={numeral(item.tutorialsCount).format('0,0')}>{numeral(item.tutorialsCount).format('0a')} tutorials</a>
        <a href={url} config={m.route} title={numeral(item.projectsCount).format('0,0')}>{numeral(item.projectsCount).format('0a')} projects</a>
      </div>
    </div>
   )
}
