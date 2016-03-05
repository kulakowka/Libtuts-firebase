import m from 'mithril'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Project (data) {
  const {_id, name, tutorialsCount} = data
  const url = helpers.projectUrl(_id)

  return (
    <div class='projectItem' key={_id}>
      <h3><a href={url} config={m.route}>{name}</a></h3>
      <div class='meta'>
        <a href={url} config={m.route} title={numeral(tutorialsCount).format('0,0')}>{numeral(tutorialsCount).format('0a')} tutorials</a>
      </div>
    </div>
   )
}
