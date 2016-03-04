import m from 'mithril'
import Item from './item'

export default function Platforms (data) {
  let list = []
  data.forEach((item) => {
    list.push(item)
  })
  return (
    <div class='platformsGrid'>
      {list.map(Item)}
    </div>
   )
}
