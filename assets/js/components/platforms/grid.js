import m from 'mithril'
import Item from './item'

export default function Platforms (list) {
  return (
    <div class='platformsGrid'>
      {list.map(Item)}
    </div>
   )
}
