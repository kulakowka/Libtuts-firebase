import m from 'mithril'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Language (data) {
  const {_id, name, projectsCount, tutorialsCount} = data
  const url = helpers.languageUrl(_id)
  const imgUrl = helpers.picUrl(_id)

  return (
    <div class='languageItem' key={_id}>
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
