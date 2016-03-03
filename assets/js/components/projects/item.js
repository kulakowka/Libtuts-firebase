import m from 'mithril'
import numeral from 'numeral'

export default function Project (item) {
  let url = '/' + item.platform + '/' + item.name

  return (
    <div class='projectItem'>
      <h3><a href={url} config={m.route}>{item.name}</a></h3>
      <div class='meta'>
        <a href={url} config={m.route} title={numeral(item.tutorialsCount).format('0,0')}>{numeral(item.tutorialsCount).format('0a')} tutorials</a>
        <a href={'/' + item.platform} config={m.route}>{item.platform}</a>
        <a href={'/language/' + item.language} config={m.route}>{item.language}</a>
      </div>
    </div>
   )
}
