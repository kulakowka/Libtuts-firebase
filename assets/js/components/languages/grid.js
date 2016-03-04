import m from 'mithril'
import Item from './item'

export default function Languages (data) {
  let list = []
  data.forEach((item) => {
    list.push(item)
  })
  return (
    <div class='languagesGrid'>
      {list.map(Item)}
    </div>
   )
}
